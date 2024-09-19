var CapacitorHealthKitWeight = (function (exports, core) {
    'use strict';

    const CapacitorHealthKitWeight = core.registerPlugin('CapacitorHealthKitWeight', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorHealthKitWeightWeb()),
    });

    class CapacitorHealthKitWeightWeb extends core.WebPlugin {
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
        CapacitorHealthKitWeightWeb: CapacitorHealthKitWeightWeb
    });

    exports.CapacitorHealthKitWeight = CapacitorHealthKitWeight;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
