const gulp = require("gulp");
const htmlTask = require("./html");
const stylesTask = require("./styles");

const { browserSync } = $;

const watchTask = cb => {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  gulp.watch("./app/**/*.html", gulp.series(htmlTask));
  gulp.watch("./app/css/**/*.css", gulp.series(stylesTask));

  cb();
};

module.exports = watchTask;
