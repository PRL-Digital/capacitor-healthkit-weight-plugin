import { WebPlugin } from '@capacitor/core';

import type { CapacitorHealthkitPlugin } from './definitions';

export class CapacitorHealthkitWeb extends WebPlugin implements CapacitorHealthkitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
