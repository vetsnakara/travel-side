const { series } = require("gulp");
const webpack = require("webpack");
const notifier = require("node-notifier");

const { browserSync } = global.$;

const config = require("../../webpack.config");

statsLog = {
  colors: true,
  reasons: false
};

const scriptsTask = done => {
  webpack(config, onComplete);

  function onComplete(error, stats) {
    if (error) {
      done(error);
    } else if (stats.hasErrors()) {
      const msg = "Compilation Error";
      notifier.notify({
        title: "Webpack",
        message: msg
      });
      console.log(stats.toString(statsLog));
      done(new Error(msg));
    } else {
      console.log(stats.toString(statsLog));
      browserSync.reload();
      done();
    }
  }
};

module.exports = series(scriptsTask);
