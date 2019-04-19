const gulp = require("gulp");
const del = require("del");

const cleanTask = () => {
  return del(["./app/tmp"]);
};

module.exports = cleanTask;
