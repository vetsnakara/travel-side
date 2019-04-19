const gulp = require("gulp");
const postCSS = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssVars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");
const mixins = require("postcss-mixins");
const plumber = require("gulp-plumber");

const { browserSync } = $;

const stylesTask = () =>
  gulp
    .src("./app/css/styles.css")
    .pipe(plumber())
    .pipe(postCSS([cssImport, mixins, cssVars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/tmp/styles"))
    .pipe(browserSync.stream());

module.exports = stylesTask;
