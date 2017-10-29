'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var assert = require("assert");
var su = require("suman-utils");
var util_1 = require("../../lib/util");
exports.exportName = String(path.basename(__dirname)).toLowerCase().replace(/[^a-zA-Z]/, '');
exports.isSumanWatchPluginModule = true;
exports.value = Object.freeze({
    isSumanWatchPluginValue: true,
    pluginName: exports.exportName + '-watch-plugin',
    pluginCwd: process.cwd(),
    pluginEnv: process.env,
    pluginExec: 'tsc -w -p "$(pwd)/tsconfig.test.json"',
    stdoutStartTranspileRegex: /starting incremental compilation/i,
    stdoutEndTranspileRegex: /compilation complete/i,
});
exports.getCustomValue = function (input) {
    var env = input.pluginEnv;
    delete input.pluginEnv;
    env && assert(su.isObject(env), '"pluginEnv" property must be a plain object.');
    var overrideObject = {
        isSumanWatchPluginValue: true,
    };
    if (env) {
        overrideObject['pluginEnv'] = Object.assign({}, process.env, exports.value.pluginEnv, env);
    }
    return util_1.validatePlugin(Object.assign({}, exports.value, input, overrideObject));
};
exports[exports.exportName + 'Plugin'] = exports.value;
util_1.validatePlugin(exports.value);
