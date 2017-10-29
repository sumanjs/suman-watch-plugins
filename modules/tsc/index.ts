'use strict';

//dts
import {ISumanWatchPlugin, IEnvObject} from "../../index";

//core
import path = require('path');
import assert = require('assert');

//npm
import su = require('suman-utils');

//project
import {log} from '../../lib/logging';
import {validatePlugin} from "../../lib/util";

//////////////////////////////////////////////////////////////////////

export const exportName = String(path.basename(__dirname)).toLowerCase().replace(/[^a-zA-Z]/, '');
export const isSumanWatchPluginModule = true;

export const value = <ISumanWatchPlugin> Object.freeze({
  isSumanWatchPluginValue: true,
  pluginName: exportName + '-watch-plugin',
  pluginCwd: process.cwd(),
  pluginEnv: process.env,
  pluginExec: 'tsc -w -p "$(pwd)/tsconfig.test.json"',
  stdoutStartTranspileRegex: /starting incremental compilation/i,
  stdoutEndTranspileRegex: /compilation complete/i,
});

export const getCustomValue = function (input: Partial<ISumanWatchPlugin>) {
  const env = input.pluginEnv;
  delete input.pluginEnv; // we delete the property since we must "manually" combine it
  env && assert(su.isObject(env), '"pluginEnv" property must be a plain object.');

  const overrideObject =  {
    isSumanWatchPluginValue: true, // this key should always be set to true
  } as Partial<ISumanWatchPlugin>;

  if(env){
    overrideObject['pluginEnv'] =  Object.assign({}, process.env, value.pluginEnv, env)
  }

  return validatePlugin(Object.assign({}, value, input, overrideObject));
};


exports[exportName + 'Plugin'] = value;
validatePlugin(value);


