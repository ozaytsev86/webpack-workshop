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
  background-image: url('../statics/YawnKitten.png');
  background-size: cover;
}
```

```javascript
// App.jsx

<div className="happy-kitten" />
<div className="yawn-kitten" />
```

`yarn add -D url-loader file-loader`

2
```javascript
// webpack.config.js

output: {
  publicPath: '/',
},
```