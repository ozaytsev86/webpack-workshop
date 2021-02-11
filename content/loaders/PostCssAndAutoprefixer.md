1
`yarn add -D postcss-loader postcss postcss-preset-env`

```javascript
// webpack.config.js
        
{
    test: /\.(css)$/,
    use: [
      'style-loader',
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
```