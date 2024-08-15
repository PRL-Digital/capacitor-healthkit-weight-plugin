import Foundation

func getDateFromString(inputDate: String) -> Date {
    let formatter = ISO8601DateFormatter()
    formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
    
    guard let date = formatter.date(from: inputDate) else {
        fatalError("Invalid date format: \(inputDate)")
    }
    
    return date
}