import { WebPlugin } from '@capacitor/core';
import type { AuthorizationStatus, CapacitorHealthKitWeightPlugin, GetAuthorizationStatusOptions, BodyMassQueryOptions, BodyMassQueryOutput, RequestAuthorizationOptions } from './definitions';
export declare class CapacitorHealthKitWeightWeb extends WebPlugin implements CapacitorHealthKitWeightPlugin {
    requestAuthorization(_options: RequestAuthorizationOptions): Promise<void>;
    isAvailable(): Promise<void>;
    getAuthorizationStatus(_options: GetAuthorizationStatusOptions): Promise<{
        status: AuthorizationStatus;
    }>;
    getBodyMassEntries(_options: BodyMassQueryOptions): Promise<BodyMassQueryOutput>;
    setBodyMassEntry(_options: {
        value: number;
        date: string;
    }): Promise<void>;
    getUserIdentifier(): Promise<{
        value: string;
    }>;
}
