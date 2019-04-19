global.$ = {
  browserSync: require("browser-sync").create()
};

module.exports = {
  default: require("./gulp/tasks/default")
};
