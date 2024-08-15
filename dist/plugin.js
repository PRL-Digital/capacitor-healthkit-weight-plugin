var capacitorHealthKit = (function (exports, core) {
    'use strict';

    const HealthKit = core.registerPlugin('HealthKit', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.HealthKitWeb()),
    });

    class HealthKitWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
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
