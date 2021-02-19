1
```scss
// src/App.scss

body {
  color: crimson;
}
```

```javascript
// webpack.config.js

{
    test: /\.(css|scss)$/,
    use: [
      'style-loader',
      'css-loader',
    ]
  },
```

2
```scss
// src/App.scss

$customColor: crimson;

body {
  color: $customColor;
}
```

3
`yarn add -D sass sass-loader`

```javascript
// webpack.config.js

{
    test: /\.(css|scss)$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  },
```
