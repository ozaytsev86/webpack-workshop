1
`yarn add -D eslint eslint-webpack-plugin`

2
```javascript
// webpack.config.js

const ESLintPlugin = require('eslint-webpack-plugin');

new ESLintPlugin(),
```

```text
// .eslintrc

{
  "rules": {
    "quotes": ["error", "single"],
    "comma-dangle": ["error", "only-multiline"]
  }
}
```

3
```text
// .eslintrc

{
  "rules": {
    "max-empty-lines": 1
  }
}
```
