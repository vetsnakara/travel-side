const del = require("del");

module.exports = /* array */ paths => () => del(paths);
