export interface CapacitorHealthKitPlugin {
    requestAuthorization(options: RequestAuthorizationOptions): Promise<void>;
    isAvailable(): Promise<void>;
    getAuthorizationStatus(options: GetAuthorizationStatusOptions): Promise<{
        status: AuthorizationStatus;
    }>;
    getBodyMassEntries(options: BodyMassQueryOptions): Promise<BodyMassQueryOutput>;
    setBodyMassEntry(options: {
        value: number;
        date: string;
    }): Promise<void>;
}
export interface RequestAuthorizationOptions {
    all?: string[];
    read?: string[];
    write?: string[];
}
export interface GetAuthorizationStatusOptions {
    sampleType: string;
}
export type AuthorizationStatus = 'notDetermined' | 'sharingDenied' | 'sharingAuthorized';
export interface BodyMassQueryOptions {
    startDate: string;
    endDate?: string;
    limit?: number;
}
export interface BodyMassQueryOutput {
    data: {
        date: string;
        value: number;
        unit: string;
        uuid: string;
        sourceName: string;
        sourceBundleId: string;
    }[];
}
export type QuantityType = 'weight';
