const { src, dest, series, parallel } = require("gulp");
const imagemin = require("gulp-imagemin");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const browserSync = require("browser-sync").create();
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const clean = require("./clean");

const sprite = require("./sprites");
const scripts = require("./scripts");
const styles = require("./styles");
const modernizr = require("./modernizr");

const serve = done => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./dist"
    }
  });
  done();
};

const copySprites = () =>
  src("./app/assets/images/sprites/*").pipe(
    dest("./dist/assets/images/sprites")
  );

const optimizeImages = () =>
  src(["./app/assets/images/*.{jpg,png}"])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(dest("./dist/assets/images"));

const useminTask = () =>
  src("./app/index.html")
    .pipe(
      usemin({
        css: [() => rev(), () => cssnano()],
        js: [() => rev(), () => uglify()]
      })
    )
    .pipe(dest("./dist"));

module.exports = series(
  series(clean(["./app/tmp", "./dist"]), sprite, styles, modernizr, scripts),
  parallel(optimizeImages, copySprites, useminTask),
  serve
);
