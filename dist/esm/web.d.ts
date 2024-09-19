import { WebPlugin } from '@capacitor/core';
import type { AuthorizationStatus, CapacitorHealthkitWeightPlugin, GetAuthorizationStatusOptions, BodyMassQueryOptions, BodyMassQueryOutput, RequestAuthorizationOptions } from './definitions';
export declare class CapacitorHealthkitWeightWeb extends WebPlugin implements CapacitorHealthkitWeightPlugin {
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
