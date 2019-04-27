const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const svg2png = require("gulp-svg2png");
const rename = require("gulp-rename");

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
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

// Create Sprite
const createSpriteTask = () =>
  gulp
    .src("./app/assets/images/icons/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/tmp/sprite/"));

// Copy sprite images
const copySpriteImagesTask = () =>
  gulp
    .src("./app/tmp/sprite/css/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprites"))
    .pipe(svg2png()) /* create png */
    .pipe(gulp.dest("./app/assets/images/sprites"));

// Copty sprite CSS
const copySpriteCSSTask = () =>
  gulp
    .src("./app/tmp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/css/modules"));

// Export module
module.exports = gulp.series(
  createSpriteTask,
  gulp.parallel(copySpriteCSSTask, copySpriteImagesTask)
);
