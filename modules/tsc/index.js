'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.exportName = String(path.basename(__dirname)).toLowerCase().replace(/[^a-zA-Z]/, '');
exports.isSumanWatchPluginModule = true;
exports.value = Object.freeze({
    name: exports.exportName + 'watch-plugin',
    isSumanWatchPluginValue: true,
    cwd: process.cwd(),
    env: process.env,
    exec: 'tsc -w -p tsconfig.test.json',
    stdoutStartTranspileRegex: /starting incremental compilation/i,
    stdoutEndTranspileRegex: /compilation complete/i,
});
exports.getCustomValue = function (input) {
    return Object.assign({}, exports.value, input, {
        isSumanWatchPluginValue: true
    });
};
exports[exports.exportName + 'Plugin'] = exports.value;
