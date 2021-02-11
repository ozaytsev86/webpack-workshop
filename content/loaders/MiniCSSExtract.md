1
`yarn add -D mini-css-extract-plugin`

```javascript
// webpack.config.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

{
  test: /\.(css)$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
  ]
},

plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin()
],
```