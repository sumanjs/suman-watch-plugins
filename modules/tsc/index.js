'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.exportName = String(path.basename(__dirname)).toLowerCase().replace(/[^a-zA-Z]/, '');
exports.isSumanWatchPluginModule = true;
exports.value = Object.freeze({
    pluginName: exports.exportName + '-watch-plugin',
    isSumanWatchPluginValue: true,
    pluginCwd: process.cwd(),
    pluginEnv: process.env,
    pluginExec: 'tsc -w -p "$(pwd)/tsconfig.test.json"',
    stdoutStartTranspileRegex: /starting incremental compilation/i,
    stdoutEndTranspileRegex: /compilation complete/i,
});
exports.getCustomValue = function (input) {
    var env = input.pluginEnv;
    delete input.pluginEnv;
    return Object.assign({}, exports.value, input, {
        isSumanWatchPluginValue: true,
        pluginEnv: env ? Object.assign({}, exports.value.pluginEnv, env) : undefined
    });
};
exports[exports.exportName + 'Plugin'] = exports.value;
