const gulp = require("gulp");
const watch = require("./watch");
const sprite = require("./sprites");
const styles = require("./styles");
const clean = require("./clean");

module.exports = gulp.series(gulp.series(clean, sprite, styles), watch);
