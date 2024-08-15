export interface CapacitorHealthkitPlugin {
  requestAuthorization(options: RequestAuthorizationOptions): Promise<void>;
  isAvailable(): Promise<void>;
  getAuthorizationStatus(
    options: GetAuthorizationStatusOptions,
  ): Promise<{ status: AuthorizationStatus }>;
  getBodyMassEntries(options: BodyMassQueryOptions): Promise<BodyMassQueryOutput>; 
}

export interface RequestAuthorizationOptions {
  all?: string[];
  read?: string[];
  write?: string[];
}

export interface GetAuthorizationStatusOptions {
  sampleType: string;
}

export type AuthorizationStatus =
  | 'notDetermined'
  | 'sharingDenied'
  | 'sharingAuthorized';

export interface WorkoutsQueryOptions {
  startDate: string;
  endDate?: string;
  limit?: number;
}

export interface BodyMassQueryOptions {
  startDate: string;
  endDate?: string;
  limit?: number;
}

export interface StatisticsCollectionOutput {
  data: {
    startDate: string;
    endDate: string;
    value: number;
  }[];
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

export interface HealthKitDevice {
  name?: string ;
  model?: string ;
  manufacturer?: string ;
  hardwareVersion?: string ;
  softwareVersion?: string ;
  firmwareVersion?: string; 
  localIdentifier?: string ; 
  udiDeviceIdentifier?: string;
}

export interface StatisticsCollectionQueryInterval {
  unit: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
  value: number;
}

export type QuantityType = 'weight';
