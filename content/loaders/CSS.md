1
```css
/* src/App.css */

body {
  background-color: aquamarine;
}
```

2
`yarn add -D css-loader`

```javascript
// webpack.config.js

{
  test: /\.(css)$/,
  loader: 'css-loader',
},
```

3
`yarn add -D style-loader`

```javascript
// webpack.config.js

{
    test: /\.(css)$/,
    use: [
      'style-loader',
      'css-loader',
    ]
  },
```