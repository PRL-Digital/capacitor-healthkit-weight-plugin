import { WebPlugin } from '@capacitor/core';
import type { AuthorizationStatus, HealthKitPlugin, GetAuthorizationStatusOptions, BodyMassQueryOptions, BodyMassQueryOutput, RequestAuthorizationOptions } from './definitions';
export declare class HealthKitWeb extends WebPlugin implements HealthKitPlugin {
    requestAuthorization(_options: RequestAuthorizationOptions): Promise<void>;
    isAvailable(): Promise<void>;
    getAuthorizationStatus(_options: GetAuthorizationStatusOptions): Promise<{
        status: AuthorizationStatus;
    }>;
    getBodyMassEntries(_options: BodyMassQueryOptions): Promise<BodyMassQueryOutput>;
}
