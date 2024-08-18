import { WebPlugin } from '@capacitor/core';
import type { AuthorizationStatus, CapacitorHealthKitPlugin, GetAuthorizationStatusOptions, BodyMassQueryOptions, BodyMassQueryOutput, RequestAuthorizationOptions } from './definitions';
export declare class CapacitorHealthKitWeb extends WebPlugin implements CapacitorHealthKitPlugin {
    requestAuthorization(_options: RequestAuthorizationOptions): Promise<void>;
    isAvailable(): Promise<void>;
    getAuthorizationStatus(_options: GetAuthorizationStatusOptions): Promise<{
        status: AuthorizationStatus;
    }>;
    getBodyMassEntries(_options: BodyMassQueryOptions): Promise<BodyMassQueryOutput>;
}
