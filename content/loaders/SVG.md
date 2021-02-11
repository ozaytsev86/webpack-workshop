https://youtu.be/J3GqBkw6ebk?t=1422

1
```javascript
// App.jsx

import CatIcon from '../statics/images/CatIcon.svg';

<img src={CatIcon} /> // works
<CatIcon /> // doesn't work because we need a specific loader
```

2
`yarn add -D @svgr/webpack`

```javascript
// webpack.config.js

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
```