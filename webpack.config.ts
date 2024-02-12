import path from 'path';
import webpack from 'webpack';

import {IBuildEnv, IBuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({mode, paths, isDev, port: PORT})

    return config;
};