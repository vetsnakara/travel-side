const { src } = require("gulp");
const ghPages = require("gulp-gh-pages");

const deployTask = () => src("./dist/**/*").pipe(ghPages());

module.exports = deployTask;
