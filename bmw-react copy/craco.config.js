const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.plugins.forEach(plugin => {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
          plugin.options.template = path.resolve(__dirname, 'src/index.html');
        }
      });
      return webpackConfig;
    }
  }
};
