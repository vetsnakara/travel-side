global.$ = {
  browserSync: require("browser-sync").create()
};

module.exports = {
  default: require("./gulp/tasks/default"),
  webpack: require("./gulp/tasks/scripts"),
  modernizr: require("./gulp/tasks/modernizr")
};
