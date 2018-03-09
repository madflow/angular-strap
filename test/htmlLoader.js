const htmlLoader = require('html-loader');

module.exports = {
  process(src, filename, config, options) {
    const loaderConfig = {
      options: {
        htmlLoader: {
          removeComments: true,
          collapseWhitespace: true
        }
      }
    };
    return htmlLoader.call(loaderConfig, src);
  }
};
