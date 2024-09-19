import Foundation
import HealthKit

struct DeviceInformation {
    let name: String?
    let model: String?
    let manufacturer: String?
    let hardwareVersion: String?
    let softwareVersion: String?
    let firmwareVersion: String?
    let localIdentifier: String?
    let udiDeviceIdentifier: String?
}

func getDeviceInformation(device: HKDevice?) -> DeviceInformation? {
    guard let device = device else {
        return nil
    }
    
    return DeviceInformation(
        name: device.name,
        model: device.model,
        manufacturer: device.manufacturer,
        hardwareVersion: device.hardwareVersion,
        softwareVersion: device.softwareVersion,
        firmwareVersion: device.firmwareVersion,
        localIdentifier: device.localIdentifier,
        udiDeviceIdentifier: device.udiDeviceIdentifier
    )
}

func convertToDeviceInformationDictionary(_ deviceInfo: DeviceInformation?) -> [String: Any]? {
    guard let deviceInfo = deviceInfo else {
        return nil
    }

    return [
        "name": deviceInfo.name as Any,
        "model": deviceInfo.model as Any,
        "manufacturer": deviceInfo.manufacturer as Any,
        "hardwareVersion": deviceInfo.hardwareVersion as Any,
        "softwareVersion": deviceInfo.softwareVersion as Any,
        "firmwareVersion": deviceInfo.firmwareVersion as Any,
        "localIdentifier": deviceInfo.localIdentifier as Any,
        "udiDeviceIdentifier": deviceInfo.udiDeviceIdentifier as Any
    ]
}