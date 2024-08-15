'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const HealthKit = core.registerPlugin('HealthKit', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.HealthKitWeb()),
});

class HealthKitWeb extends core.WebPlugin {
    useOnDevice() {
        return false;
    }
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
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HealthKitWeb: HealthKitWeb
});

exports.HealthKit = HealthKit;
//# sourceMappingURL=plugin.cjs.js.map
