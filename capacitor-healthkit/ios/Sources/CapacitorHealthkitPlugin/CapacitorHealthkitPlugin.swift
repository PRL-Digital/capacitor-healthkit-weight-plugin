import Foundation
import Capacitor
import HealthKit

var healthStore = HKHealthStore()

@objc(CapacitorHealthkitPlugin)
public class CapacitorHealthkitPlugin: CAPPlugin {

    public let identifier = "CapacitorHealthkitPlugin"
    public let jsName = "CapacitorHealthkit"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestAuthorization", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isAvailable", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getAuthorizationStatus", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getBodyMassEntries", returnType: CAPPluginReturnPromise)
    ]

    @objc func requestAuthorization(_ call: CAPPluginCall) {
        if !HKHealthStore.isHealthDataAvailable() {
            return call.reject("Health data is not available.")
        }
        
        let _all = call.options["all"] as? [String] ?? []
        let _read = call.options["read"] as? [String] ?? []
        let _write = call.options["write"] as? [String] ?? []

        let writeTypes: Set<HKSampleType> = getSampleTypes(sampleNames: _write).union(getSampleTypes(sampleNames: _all))
        let readTypes: Set<HKSampleType> = getSampleTypes(sampleNames: _read).union(getSampleTypes(sampleNames: _all))

        healthStore.requestAuthorization(toShare: writeTypes, read: readTypes) { success, _ in
            if !success {
                call.reject("Could not get permission to access health.")
                
                return;
            }
            
            call.resolve();
        }
    }
    
    @objc func isAvailable(_ call: CAPPluginCall) {
        if HKHealthStore.isHealthDataAvailable() {
            return call.resolve()
        } else {
            return call.reject("Health data is not available.")
        }
    }

    @objc func getAuthorizationStatus(_ call: CAPPluginCall) {
        guard let sampleName = call.options["sampleName"] as? String else {
            return call.reject("sampleName is required.")
        }

        let sampleType: HKSampleType? = getSampleType(sampleName: sampleName)
        
        if sampleType == nil {
            return call.reject("Unknown sampleName " + sampleName)
        }
        
        let status: String;
        
        switch healthStore.authorizationStatus(for: sampleType!) {
            case .sharingAuthorized:
                status = "sharingAuthorized"
            case .sharingDenied:
                status = "sharingDenied"
            case .notDetermined:
                status = "notDetermined"
            @unknown default:
                return call.reject("Unknown status")
        }
        
        call.resolve([
            "status": status
        ])
    }
        
    @objc func getBodyMassEntries(_ call: CAPPluginCall) {
        guard let startDateString = call.options["startDate"] as? String else {
            return call.reject("startDate is required.")
        }
        
        let endDateString = call.options["endDate"] as? String
        
        let limit = call.options["limit"] as? Int ?? 0
        
        let sampleType = HKQuantityType.quantityType(forIdentifier: HKQuantityTypeIdentifier.bodyMass)!
        
        let _startDate = getDateFromString(inputDate: startDateString)
        let _endDate = endDateString != nil ? getDateFromString(inputDate: endDateString!) : Date()
        let _limit: Int = (limit == 0) ? HKObjectQueryNoLimit : limit
        
        let predicate = HKQuery.predicateForSamples(withStart: _startDate, end: _endDate, options: HKQueryOptions.strictStartDate)
            
        // Create a query to fetch the latest weight samples
        let bodyMassQuery = HKSampleQuery(sampleType: sampleType,
                                        predicate: predicate,
                                        limit: _limit,
                                        sortDescriptors: nil) { (query, samples, error) in
            
            guard let bodyMassSamples = samples as? [HKQuantitySample], error == nil else {
                return call.reject("error")
            }
            
            var output: [[String: Any]] = []
            
            for bodyMassSample in bodyMassSamples {
                output.append([
                    "date": bodyMassSample.startDate,
                    "value": bodyMassSample.quantity.doubleValue(for: HKUnit.gramUnit(with: .kilo)),
                    "unit": "kg",
                    "uuid": bodyMassSample.uuid.uuidString,
                    "sourceName": bodyMassSample.sourceRevision.source.name,
                    "sourceBundleId": bodyMassSample.sourceRevision.source.bundleIdentifier
                ])
            }
            
            call.resolve(["data": output])
        }
        
        healthStore.execute(bodyMassQuery)
    }
}