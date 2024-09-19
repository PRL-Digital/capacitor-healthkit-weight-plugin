// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorHealthkitWeight",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorHealthkitWeight",
            targets: ["CapacitorHealthkitWeight"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorHealthkitWeight",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorHealthkitWeight"),
        .testTarget(
            name: "CapacitorHealthkitWeightTests",
            dependencies: ["CapacitorHealthkitWeight"],
            path: "ios/Tests/CapacitorHealthkitWeightTests")
    ]
)