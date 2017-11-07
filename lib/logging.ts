'use strict';

//dts
import {ISumanConfig} from "suman-types/dts/global"

//polyfills
const process = require('suman-browser-polyfills/modules/process');
const global = require('suman-browser-polyfills/modules/global');

//npm
import chalk from 'chalk';

//project
const name = ' [suman-watch-plugins] ';

///////////////////////////////////////////////////////////////////////////

//
export const log = {
  info: console.log.bind(console, name),
  good: console.log.bind(console, chalk.cyan(name)),
  veryGood: console.log.bind(console, chalk.green(name)),
  warning: console.log.bind(console, chalk.yellow.bold(name)),
  error: console.log.bind(console, chalk.red(name)),
  newLine: function () {
    console.log();
  }
};
