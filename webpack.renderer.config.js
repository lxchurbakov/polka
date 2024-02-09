const path = require('path');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    alias: {
      libs: path.resolve(__dirname, './src/libs/'),
      // Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },
};
