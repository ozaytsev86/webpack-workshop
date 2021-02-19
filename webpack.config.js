const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  resolveLoader: {
    alias: {
      // to use it remove svg loader for js,jsx issuer below
      // const CatComp = require('svgAsReactComponent!./statics/CatIcon.svg').default;
      svgAsReactComponent: '@svgr/webpack',
    }
  },

  module: {
    rules: [
      // transpile js and jsx files to JS
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        issuer: /\.(js|jsx)$/,
        use: '@svgr/webpack'
      },
      {
        test: /\.svg$/,
        issuer: /\.(sa|sc|c)ss$/,
        loader: 'file-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ],
  devServer: {
    // open: true,
    progress: true,
  },
  output: {
    publicPath: '/',
  },
}



