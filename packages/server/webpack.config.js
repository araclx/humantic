const configure = require("craftpack");
const path = require("path");

module.exports = configure({
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  entry: path.join(__dirname, "src", "worker.ts")
});
