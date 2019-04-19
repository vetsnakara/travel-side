const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");

const config = {
  mode: {
    css: {
      sprite: "sprite/sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

const createSpriteTask = () =>
  gulp
    .src("./app/assets/images/icons/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/tmp/sprite/"));

const copySpriteCSSTask = () =>
  gulp
    .src("./app/tmp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/css/modules"));

module.exports = gulp.series(createSpriteTask, copySpriteCSSTask);
