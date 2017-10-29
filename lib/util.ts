'use strict';

//dts
import {ISumanWatchPlugin} from "../index";

//core
import fs = require('fs');
import path = require('path');
import assert = require('assert');

//npm
import su = require('suman-utils');
import util = require('util');
import chalk from 'chalk';

//project
import {log} from './logging';

///////////////////////////////////////////////////////////////////////////

export const validatePlugin = function (v: ISumanWatchPlugin) {

  try {
    assert(v, 'plugin value is not defined.');
    assert(v.pluginName && typeof v.pluginName === 'string', '"pluginName" property needs to be defined.');
    assert.equal(v.isSumanWatchPluginValue, true, '"isSumanWatchPluginValue" property needs to be set to true.');
    assert(v.pluginCwd && typeof v.pluginCwd === 'string', '"pluginCwd" property needs to be defined.');
    assert(v.pluginEnv && su.isObject(v.pluginEnv), '"pluginEnv" property needs to be a plain object.');
  }
  catch (err) {
    log.error('The following suman-watch-plugin is malformed =>\n', chalk.magenta.bold(util.inspect(v)));
    throw err;
  }

  return v;

};