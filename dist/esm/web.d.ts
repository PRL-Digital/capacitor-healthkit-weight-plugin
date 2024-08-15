import { WebPlugin } from '@capacitor/core';
import type { HealthKitPlugin } from './definitions';
export declare class HealthKitWeb extends WebPlugin implements HealthKitPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
