1
```css
// App.css

.happy-kitten {
  width: 150px;
  height: 150px;
  background-image: url('../statics/HappyKitten.png');
  background-size: cover;
}


.yawn-kitten {
  width: 150px;
  height: 150px;
  background-image: url('../statics/YawnKitten.jpg');
  background-size: cover;
}
```

```javascript
// App.jsx

<div className="happy-kitten" />
<div className="yawn-kitten" />
```

`yarn add -D url-loader file-loader`

```javascript
// webpack.config.js
{
  test: /\.(png)$/,
  loader: 'url-loader',
},
{
  test: /\.(jpg)$/,
  loader: 'file-loader',
},
```

2
```javascript
// webpack.config.js

output: {
  publicPath: '/',
},
```