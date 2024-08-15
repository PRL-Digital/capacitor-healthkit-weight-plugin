import { WebPlugin } from '@capacitor/core';

import type { HealthKitPlugin } from './definitions';

export class HealthKitWeb extends WebPlugin implements HealthKitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
