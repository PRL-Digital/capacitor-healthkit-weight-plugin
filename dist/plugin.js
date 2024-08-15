var HealthKit = (function (exports, core) {
    'use strict';

    const HealthKit = core.registerPlugin('HealthKit', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.HealthKitWeb()),
    });

    class HealthKitWeb extends core.WebPlugin {
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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
