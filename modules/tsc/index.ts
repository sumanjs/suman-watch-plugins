'use strict';

//dts
import {ISumanWatchPlugin} from "../../index";

//core
import path = require('path');

//////////////////////////////////////////////////////////////////////

export const exportName = String(path.basename(__dirname)).toLowerCase().replace(/[^a-zA-Z]/, '');
export const isSumanWatchPluginModule = true;

export const value = <ISumanWatchPlugin> Object.freeze({
  name: exportName + 'watch-plugin',
  isSumanWatchPluginValue: true,
  cwd: process.cwd(),
  env: process.env,
  exec: 'tsc -w -p tsconfig.test.json',
  stdoutStartTranspileRegex: /starting incremental compilation/i,
  stdoutEndTranspileRegex: /compilation complete/i,
});

export const getCustomValue = function (input: Partial<ISumanWatchPlugin>) {
  return Object.assign({}, value, input, {
    isSumanWatchPluginValue: true // this key should always be set to true
  });
};


exports[exportName + 'Plugin'] = value;


