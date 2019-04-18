/**
 * webpack.config.development.js
 * Webpack development build configurations
 */

// Node Modules
// const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (directoryConfig) => {
  const config = {
    ...require('./webpack.config.common.js')(directoryConfig),
  };
  config.mode = 'development';
  config.devServer = {
    contentBase: directoryConfig.public,
    historyApiFallback: true,
    host: '0.0.0.0',
    // https: {
    //   key: fs.readFileSync('/Users/ppak10/server.key'),
    //   cert: fs.readFileSync('/Users/ppak10/server.crt'),
    //   ca: fs.readFileSync('/Users/ppak10/rootCA.pem'),
    // },
    port: 3000,
    publicPath: '/js/',
  };
  const publicPath = [
    {
      from: directoryConfig.public,
      to: directoryConfig.public,
    },
  ];
  config.plugins.push(new CopyWebpackPlugin(publicPath));
  config.output.path = directoryConfig.public;
  return config;
};
