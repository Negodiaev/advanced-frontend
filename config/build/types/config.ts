export type TBuildMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
}