import { registerPlugin } from '@capacitor/core';
const CapacitorHealthKit = registerPlugin('CapacitorHealthKit', {
    web: () => import('./web').then((m) => new m.CapacitorHealthKitWeb()),
});
export * from './definitions';
export { CapacitorHealthKit };
//# sourceMappingURL=index.js.map