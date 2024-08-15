import { WebPlugin } from '@capacitor/core';

import type {
  AuthorizationStatus,
  CapacitorHealthkitPlugin,
  GetAuthorizationStatusOptions,
  BodyMassQueryOptions,
  BodyMassQueryOutput,
} from './definitions';

export class CapacitorHealthkitWeb
  extends WebPlugin
  implements CapacitorHealthkitPlugin
{
  async echo(): Promise<void> {
    throw new Error('Not available on web');
  }

  async requestAuthorization(): Promise<void> {
    throw new Error('Not available on web');
  }

  async isAvailable(): Promise<void> {
      throw new Error('Not available on web');
  }

  async getAuthorizationStatus(
    options: GetAuthorizationStatusOptions,
  ): Promise<{ status: AuthorizationStatus }> {
    console.log({ options });
       throw new Error('Not available on web');
  }

  async getBodyMassEntries(
    options: BodyMassQueryOptions,
  ): Promise<BodyMassQueryOutput> {
    console.log({ options });
    throw new Error('Not available on web');
  }
}
