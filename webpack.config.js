/**
 * webpack.config.js
 * Config file to build webpack bundle with respect to the environment
 */

const PATH = require('path');

const directoryConfig = {
  app: PATH.resolve(__dirname, 'src/client'),
  backendBuild: PATH.resolve(__dirname, '../mixr-backend/public/js'),
  build: PATH.resolve(__dirname, 'public/js'),
  public: PATH.resolve(__dirname, 'public'),
};

module.exports = (env) => {
  if (env === 'devserver' || env === 'backend' || env === 'production') {
    const buildEnvironment = `./config/webpack.config.${env}.js`;
    // eslint-disable-next-line no-console
    console.log(require(buildEnvironment)(directoryConfig));
    return require(buildEnvironment)(directoryConfig);
  } else {
    console.error(`$'{env}' is an invalid build environment.`);
    console.error(`Valid parameters: 'devserver', 'backend', 'production'`);
  }
};
