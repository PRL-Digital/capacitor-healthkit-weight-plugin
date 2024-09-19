'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorHealthkitWeight = core.registerPlugin('CapacitorHealthkitWeight', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorHealthkitWeightWeb()),
});

class CapacitorHealthkitWeightWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorHealthkitWeightWeb: CapacitorHealthkitWeightWeb
});

exports.CapacitorHealthkitWeight = CapacitorHealthkitWeight;
//# sourceMappingURL=plugin.cjs.js.map
