const { browserSync } = $;

const htmlTask = cb => {
  browserSync.reload();
  cb();
};

module.exports = htmlTask;
