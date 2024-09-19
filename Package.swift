// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorHealthKitWeight",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorHealthKitWeight",
            targets: ["CapacitorHealthKitWeight"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorHealthKitWeight",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorHealthKitWeight"),
        .testTarget(
            name: "CapacitorHealthKitWeightTests",
            dependencies: ["CapacitorHealthKitWeight"],
            path: "ios/Tests/CapacitorHealthKitWeightTests")
    ]
)