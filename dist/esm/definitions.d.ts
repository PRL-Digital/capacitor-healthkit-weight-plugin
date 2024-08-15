export interface HealthKitPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
