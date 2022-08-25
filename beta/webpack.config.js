const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ContextReplacementPlugin(
      /\/package-name\//,
      (data) => {
        delete data.dependencies[0].critical;
        return data;
      },
    ),
  ]
}