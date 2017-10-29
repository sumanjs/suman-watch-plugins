import { ISumanWatchPlugin, IEnvObject } from "../../index";
export declare const exportName: string;
export declare const isSumanWatchPluginModule: boolean;
export declare const value: ISumanWatchPlugin;
export declare const getCustomValue: (input: Partial<ISumanWatchPlugin>) => ISumanWatchPlugin & Partial<ISumanWatchPlugin> & {
    isSumanWatchPluginValue: boolean;
    pluginEnv: IEnvObject;
};
