/**
 * webpack.config.backend.js
 * Webpack backend development build configuration
 */

module.exports = (directoryConfig) => {
  const config = {
    ...require('./webpack.config.common.js')(directoryConfig),
  };
  config.mode = 'development';
  config.output = {
    ...config.output,
    path: directoryConfig.backendBuild,
  };
  return config;
};
