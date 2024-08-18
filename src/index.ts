import { registerPlugin } from '@capacitor/core';

import type { CapacitorHealthKitPlugin } from './definitions';

const CapacitorHealthKit = registerPlugin<CapacitorHealthKitPlugin>('CapacitorHealthKit', {
  web: () => import('./web').then((m) => new m.CapacitorHealthKitWeb()),
});

export * from './definitions';
export { CapacitorHealthKit };
