export function buildBabelLoader(isDev: boolean) {
  return {
    test: /\.(ts?x|js?x)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', {
            locales: ['en', 'ru'],
            keyAsDefaultValue: true,
          }],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
