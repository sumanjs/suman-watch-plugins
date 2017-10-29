'use strict';

//dts
import {ISumanWatchPlugin, IEnvObject} from "../../index";

//core
import path = require('path');

//////////////////////////////////////////////////////////////////////

export const exportName = String(path.basename(__dirname)).toLowerCase().replace(/[^a-zA-Z]/, '');
export const isSumanWatchPluginModule = true;

export const value = <ISumanWatchPlugin> Object.freeze({
  pluginName: exportName + '-watch-plugin',
  isSumanWatchPluginValue: true,
  pluginCwd: process.cwd(),
  pluginEnv: process.env,
  pluginExec: 'tsc -w -p "$(pwd)/tsconfig.test.json"',
  stdoutStartTranspileRegex: /starting incremental compilation/i,
  stdoutEndTranspileRegex: /compilation complete/i,
});

export const getCustomValue = function (input: Partial<ISumanWatchPlugin>) {
  const env = input.pluginEnv;
  delete input.pluginEnv;
  return Object.assign({}, value, input, {
    isSumanWatchPluginValue: true, // this key should always be set to true
    pluginEnv: env ? Object.assign({}, value.pluginEnv, env) : undefined
  });
};


exports[exportName + 'Plugin'] = value;


