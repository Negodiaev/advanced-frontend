export function buildSvgLoader() {
  return {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: { overrides: { removeViewBox: false, cleanupIds: false } },
          }],
        },
      },
    }],
  };
}
