const path = require('path');

module.exports = {
  watch: false,
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.join(__dirname, 'bin')
  }
}
