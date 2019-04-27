global.$ = {
  browserSync: require("browser-sync").create()
};

module.exports = {
  default: require("./gulp/tasks/default"),
  sprites: require("./gulp/tasks/sprites"),
  build: require("./gulp/tasks/build"),
  deploy: require("./gulp/tasks/deploy")
};
