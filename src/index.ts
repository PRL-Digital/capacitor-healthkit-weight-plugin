import { registerPlugin } from '@capacitor/core';

import type { CapacitorHealthkitWeightPlugin } from './definitions';

const CapacitorHealthkitWeight = registerPlugin<CapacitorHealthkitWeightPlugin>('CapacitorHealthkitWeight', {
  web: () => import('./web').then((m) => new m.CapacitorHealthkitWeightWeb()),
});

export * from './definitions';
export { CapacitorHealthkitWeight };
