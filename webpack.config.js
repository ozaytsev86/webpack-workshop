const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: 'src/components/shared/slahflasdf/asdfasdf'
    }
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
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
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
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
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
    new ESLintPlugin({
      emitWarning: true,
      failOnError: false,
    }),
    new StylelintPlugin({
      emitWarning: true,
      failOnError: false,
    }),
    new Dotenv(),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    progress: true,
    hot: true,
    port: 8081
  },
  output: {
    publicPath: '/',
  },
}



