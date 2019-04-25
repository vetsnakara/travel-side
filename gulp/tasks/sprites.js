const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const svg2png = require("gulp-svg2png");
const rename = require("gulp-rename");

const config = {
  mode: {
    shape: {
      spacing: {
        padding: 100
      }
    },
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            console.log(sprite);
            const spritePng = sprite.split(".svg").join(".png");
            return render(spritePng);
          };
        }
      },
      bust: false,
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

const createPngCopy = () =>
  gulp
    .src("./app/tmp/sprite/css/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("./app/tmp/sprite/css"));

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

module.exports = gulp.series(
  createSpriteTask,
  gulp.parallel(copySpriteCSSTask, createPngCopy)
);
