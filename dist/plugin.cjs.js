'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
