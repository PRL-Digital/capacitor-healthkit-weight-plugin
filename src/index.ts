import { registerPlugin } from '@capacitor/core';

import type { CapacitorHealthKitWeightPlugin } from './definitions';

const CapacitorHealthKitWeight = registerPlugin<CapacitorHealthKitWeightPlugin>('CapacitorHealthKitWeight', {
  web: () => import('./web').then((m) => new m.CapacitorHealthKitWeightWeb()),
});

export * from './definitions';
export { CapacitorHealthKitWeight };
