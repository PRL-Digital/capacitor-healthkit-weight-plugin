import { WebPlugin } from '@capacitor/core';

import type {
  AuthorizationStatus,
  HealthKitPlugin,
  GetAuthorizationStatusOptions,
  BodyMassQueryOptions,
  BodyMassQueryOutput,
  RequestAuthorizationOptions,
} from './definitions';

export class HealthKitWeb extends WebPlugin implements HealthKitPlugin {
  async requestAuthorization(
    _options: RequestAuthorizationOptions,
  ): Promise<void> {
    throw new Error('Not available on web');
  }

  async isAvailable(): Promise<void> {
    throw new Error('Not available on web');
  }

  async getAuthorizationStatus(
    _options: GetAuthorizationStatusOptions,
  ): Promise<{ status: AuthorizationStatus }> {
    throw new Error('Not available on web');
  }

  async getBodyMassEntries(
    _options: BodyMassQueryOptions,
  ): Promise<BodyMassQueryOutput> {
    throw new Error('Not available on web');
  }
}
