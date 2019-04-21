const gulp = require("gulp");
const htmlTask = require("./html");
const stylesTask = require("./styles");
const scriptsTask = require("./scripts");

const { browserSync } = $;

const watchTask = cb => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch("./app/**/*.html", gulp.series(htmlTask));
  gulp.watch("./app/css/**/*.css", gulp.series(stylesTask));
  gulp.watch("./app/assets/scripts/**/*.js", gulp.series(scriptsTask));

  cb();
};

module.exports = watchTask;
