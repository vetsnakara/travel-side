const { src, dest } = require("gulp");
const modernizr = require("gulp-modernizr");

const modernizrTask = () =>
  src(["./app/tmp/styles/styles.css", "./app/asssets/scripts/**/*.js"])
    .pipe(
      modernizr({
        options: ["setClasses"]
      })
    )
    .pipe(dest("./app/tmp/scripts"));

module.exports = modernizrTask;
