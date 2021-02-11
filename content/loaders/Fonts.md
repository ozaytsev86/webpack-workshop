1
```css
/* src/App.css */

@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../statics/fonts/fa-regular-400.eot");
  src: url("../statics/fonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("../statics/fonts/fa-regular-400.woff2") format("woff2"), url("../statics/fonts/fa-regular-400.woff") format("woff"), url("../statics/fonts/fa-regular-400.ttf") format("truetype"), url("../statics/fonts/fa-regular-400.svg#fontawesome") format("svg"); 
}

.far {
  font-family: 'Font Awesome 5 Free';
  font-weight: 400; 
}

.fa-wink:before {
  content: "\f58c";
}
```

```javascript
// App.jsx

<div className="far fa-wink" />
```

```javascript
// webpack.config.js

{
  test: /\.(jpg|eot|ttf|woff|woff2|svg)$/,
  loader: 'file-loader',
},
```