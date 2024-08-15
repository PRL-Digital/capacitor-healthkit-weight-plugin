// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorHealthkit",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorHealthkit",
            targets: ["HealthKitPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "HealthKitPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/HealthKitPlugin"),
        .testTarget(
            name: "HealthKitPluginTests",
            dependencies: ["HealthKitPlugin"],
            path: "ios/Tests/HealthKitPluginTests")
    ]
)