import Foundation
import Capacitor
import HealthKit

@objc(CapacitorHealthKit)
public class CapacitorHealthKit: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorHealthKit"
    public let jsName = "CapacitorHealthKit"
    public let pluginMethods: [CAPPluginMethod] = [
        // Return sync status
        CAPPluginMethod(name: "requestAuthorization", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isAvailable", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getAuthorizationStatus", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getBodyMassEntries", returnType: CAPPluginReturnPromise)
    ]

    private let healthStore = HKHealthStore()

    @objc func requestAuthorization(_ call: CAPPluginCall) {
        if !HKHealthStore.isHealthDataAvailable() {
            return call.reject("Health data is not available.")
        }
        
        let all = call.getArray("all", String.self) ?? []
        let read = call.getArray("read", String.self) ?? []
        let write = call.getArray("write", String.self) ?? []

        let writeTypes: Set<HKSampleType> = getSampleTypes(sampleNames: write).union(getSampleTypes(sampleNames: all))
        let readTypes: Set<HKSampleType> = getSampleTypes(sampleNames: read).union(getSampleTypes(sampleNames: all))

        healthStore.requestAuthorization(toShare: writeTypes, read: readTypes) { success, error in
            if !success {
                call.reject("Could not get permission to access health data: \(error?.localizedDescription ?? "Unknown error")")
                return
            }
            
            call.resolve()
        }
    }
    
    @objc func isAvailable(_ call: CAPPluginCall) {
        call.resolve([
            "available": HKHealthStore.isHealthDataAvailable()
        ])
    }

    @objc func getAuthorizationStatus(_ call: CAPPluginCall) {
        guard let sampleName = call.getString("sampleType") else {
            return call.reject("sampleType is required.")
        }

        guard let sampleType = getSampleType(sampleName: sampleName) else {
            return call.reject("Unknown sampleType: \(sampleName)")
        }
        
        let status: AuthorizationStatus
        
        switch healthStore.authorizationStatus(for: sampleType) {
        case .sharingAuthorized:
            status = .sharingAuthorized
        case .sharingDenied:
            status = .sharingDenied
        case .notDetermined:
            status = .notDetermined
        @unknown default:
            return call.reject("Unknown authorization status")
        }
        
        call.resolve([
            "status": status.rawValue
        ])
    }
        
    @objc func getBodyMassEntries(_ call: CAPPluginCall) {
        guard let startDateString = call.getString("startDate") else {
            return call.reject("startDate is required.")
        }
        
        let endDateString = call.getString("endDate")
        let limit = call.getInt("limit") ?? HKObjectQueryNoLimit
        
        guard let sampleType = HKQuantityType.quantityType(forIdentifier: .bodyMass) else {
            return call.reject("Body mass sample type is not available.")
        }
        
        let startDate = getDateFromString(inputDate: startDateString)
        let endDate = endDateString != nil ? getDateFromString(inputDate: endDateString!) : Date()
        
        let predicate = HKQuery.predicateForSamples(withStart: startDate, end: endDate, options: .strictStartDate)
            
        let bodyMassQuery = HKSampleQuery(sampleType: sampleType,
                                          predicate: predicate,
                                          limit: limit,
                                          sortDescriptors: [NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: false)]) { (_, samples, error) in
            
            if let error = error {
                return call.reject("Failed to fetch body mass entries: \(error.localizedDescription)")
            }
            
            guard let bodyMassSamples = samples as? [HKQuantitySample] else {
                return call.reject("No body mass samples found")
            }
            
            let output: [[String: Any]] = bodyMassSamples.map { sample in
                return [
                    "date": ISO8601DateFormatter().string(from: sample.startDate),
                    "value": sample.quantity.doubleValue(for: HKUnit.gramUnit(with: .kilo)),
                    "unit": "kg",
                    "uuid": sample.uuid.uuidString,
                    "sourceName": sample.sourceRevision.source.name,
                    "sourceBundleId": sample.sourceRevision.source.bundleIdentifier
                ]
            }
            
            call.resolve(["data": output])
        }
        
        healthStore.execute(bodyMassQuery)
    }
}

extension AuthorizationStatus: CustomStringConvertible {
    public var description: String {
        switch self {
        case .notDetermined: return "notDetermined"
        case .sharingDenied: return "sharingDenied"
        case .sharingAuthorized: return "sharingAuthorized"
        }
    }
    
    public var rawValue: String {
        return self.description
    }
}

enum AuthorizationStatus: String {
    case notDetermined
    case sharingDenied
    case sharingAuthorized
}