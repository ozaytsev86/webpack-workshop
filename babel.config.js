module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        // so we don't need to import React
        runtime: "automatic"
      }
    ]
  ]
}
