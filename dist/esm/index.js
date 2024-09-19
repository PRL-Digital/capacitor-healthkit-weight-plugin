import { registerPlugin } from '@capacitor/core';
const CapacitorHealthkitWeight = registerPlugin('CapacitorHealthkitWeight', {
    web: () => import('./web').then((m) => new m.CapacitorHealthkitWeightWeb()),
});
export * from './definitions';
export { CapacitorHealthkitWeight };
//# sourceMappingURL=index.js.map