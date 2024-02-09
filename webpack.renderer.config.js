const path = require('path');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  resolve: {
    alias: {
      libs: path.resolve(__dirname, './src/libs/'),
      plugins: path.resolve(__dirname, './src/plugins/'),
    },
  },
};
