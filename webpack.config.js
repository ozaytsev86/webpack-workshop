const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, args) => {
  const isDevMode = args.mode === 'development';

  return {
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
    optimization: {
      usedExports: true,
      minimize: !isDevMode,
      minimizer: [
        new TerserPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
      },
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
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'statics/images/[name].[hash].[ext]',
              }
            }
          ],
        },
        {
          test: /\.(jpg|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'statics/fonts/[name].[contenthash].[ext]',
              },
            }
          ]
        },
        {
          test: /\.svg$/,
          issuer: /\.(js|jsx)$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                name: 'statics/components/[name].[contenthash].[ext]',
              },
            },
          ]
        },
        {
          test: /\.svg$/,
          issuer: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'statics/images/[name].[contenthash].[ext]',
              },
            },
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: 'statics/styles/[name].[contenthash].css',
      }),
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
      filename: '[name].[contenthash].js',
      chunkFilename: 'statics/scripts/[name].[chunkhash].js',
    }
  }
}



