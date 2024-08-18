// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorHealthKit",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorHealthKit",
            targets: ["CapacitorHealthKit"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorHealthKit",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorHealthKit"),
        .testTarget(
            name: "CapacitorHealthKitTests",
            dependencies: ["CapacitorHealthKit"],
            path: "ios/Tests/CapacitorHealthKitTests")
    ]
)