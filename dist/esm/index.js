import { registerPlugin } from '@capacitor/core';
const CapacitorHealthKitWeight = registerPlugin('CapacitorHealthKitWeight', {
    web: () => import('./web').then((m) => new m.CapacitorHealthKitWeightWeb()),
});
export * from './definitions';
export { CapacitorHealthKitWeight };
//# sourceMappingURL=index.js.map