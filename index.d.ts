export interface IEnvObject {
    [key: string]: string;
}
export interface ISumanWatchPluginModule {
    exportName: string;
    value: ISumanWatchPlugin;
    getCustomValue: (input: Partial<ISumanWatchPlugin>) => ISumanWatchPlugin;
}
export interface ISumanWatchPluginModules {
    [key: string]: ISumanWatchPluginModule;
}
export interface ISumanWatchPlugin {
    execTests?: string;
    pluginName: string;
    isSumanWatchPluginValue: true;
    pluginCwd: string;
    pluginEnv: IEnvObject;
    pluginExec: string;
    stdoutStartTranspileRegex: RegExp;
    stdoutEndTranspileRegex: RegExp;
}
export declare const plugins: ISumanWatchPluginModules;
