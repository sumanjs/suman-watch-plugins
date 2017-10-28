import fs = require('fs');
import path = require('path');

export interface IEnvObject {
  [key: string]: string
}

export interface ISumanWatchPlugin {
  cwd: string,
  env: IEnvObject,
  exec: string,
  stdoutStartTranspileRegex: RegExp,
  stdoutEndTranspileRegex: RegExp,
}

export interface ISumanWatchPluginModule {
  exportName: string,
  value: ISumanWatchPlugin,
  getCustomValue: (input: Partial<ISumanWatchPlugin>) => ISumanWatchPlugin
}

export interface ISumanWatchPluginModules {
  [key: string]: ISumanWatchPluginModule
}

export const plugins = {} as ISumanWatchPluginModules;
const modules = path.resolve(__dirname + '/modules');

fs.readdirSync(modules).forEach(function (item) {
  const file = path.resolve(modules + '/' + item);
  const mod = require(file) as ISumanWatchPluginModule;
  plugins[mod.exportName] = mod;
});