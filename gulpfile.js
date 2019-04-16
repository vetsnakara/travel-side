global.$ = {
  browserSync: require("browser-sync").create()
};

module.exports = {
  watch: require("./gulp/tasks/watch")
};
