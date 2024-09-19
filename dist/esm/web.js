import { WebPlugin } from '@capacitor/core';
export class CapacitorHealthkitWeightWeb extends WebPlugin {
    async requestAuthorization(_options) {
        throw new Error('Not available on web');
    }
    async isAvailable() {
        throw new Error('Not available on web');
    }
    async getAuthorizationStatus(_options) {
        throw new Error('Not available on web');
    }
    async getBodyMassEntries(_options) {
        throw new Error('Not available on web');
    }
    async setBodyMassEntry(_options) {
        throw new Error('Not available on web');
    }
    async getUserIdentifier() {
        throw new Error('Not available on web');
    }
}
//# sourceMappingURL=web.js.map