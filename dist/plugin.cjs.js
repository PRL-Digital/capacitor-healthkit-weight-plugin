'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorHealthKit = core.registerPlugin('CapacitorHealthKit', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorHealthKitWeb()),
});

class CapacitorHealthKitWeb extends core.WebPlugin {
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
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorHealthKitWeb: CapacitorHealthKitWeb
});

exports.CapacitorHealthKit = CapacitorHealthKit;
//# sourceMappingURL=plugin.cjs.js.map
