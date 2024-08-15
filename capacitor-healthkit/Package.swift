// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorHealthkit",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorHealthkit",
            targets: ["CapacitorHealthkitPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorHealthkitPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorHealthkitPlugin"),
        .testTarget(
            name: "CapacitorHealthkitPluginTests",
            dependencies: ["CapacitorHealthkitPlugin"],
            path: "ios/Tests/CapacitorHealthkitPluginTests")
    ]
)