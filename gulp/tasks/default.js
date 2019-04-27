const { series } = require("gulp");
const watch = require("./watch");
const sprite = require("./sprites");
const scripts = require("./scripts");
const styles = require("./styles");
const clean = require("./clean")("./app/tmp");
const modernizr = require("./modernizr");

module.exports = series(
  series(clean, sprite, styles, modernizr, scripts),
  watch
);
