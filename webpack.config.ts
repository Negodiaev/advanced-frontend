import path from 'path';
import webpack from 'webpack';

import { IBuildEnv, IBuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3001;
  const apiURL = env.apiURL || 'http://0.0.0.0:8000';

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode, paths, isDev, port: PORT, apiURL,
  });

  return config;
};
