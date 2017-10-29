'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var su = require("suman-utils");
var util = require("util");
var chalk_1 = require("chalk");
var logging_1 = require("./logging");
exports.validatePlugin = function (v) {
    try {
        assert(v, 'plugin value is not defined.');
        assert(v.pluginName && typeof v.pluginName === 'string', '"pluginName" property needs to be defined.');
        assert.equal(v.isSumanWatchPluginValue, true, '"isSumanWatchPluginValue" property needs to be set to true.');
        assert(v.pluginCwd && typeof v.pluginCwd === 'string', '"pluginCwd" property needs to be defined.');
        assert(v.pluginEnv && su.isObject(v.pluginEnv), '"pluginEnv" property needs to be a plain object.');
    }
    catch (err) {
        logging_1.log.error('The following suman-watch-plugin is malformed =>\n', chalk_1.default.magenta.bold(util.inspect(v)));
        throw err;
    }
    return v;
};
