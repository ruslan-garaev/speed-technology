/*
 * Gulp Builder (Preline for NPM)
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */
const gulp = require("gulp");
const rename = require("gulp-rename");
const del = require("del");

function clean() {
  return del("./npm/preline/**", { force: true });
}

function copy() {
  return gulp
    .src([
      "./src/assets/vendor/preline/**",
      "!./src/assets/vendor/preline/node_modules/**",
      "!./src/assets/vendor/preline/.gitignore",
    ])
    .pipe(gulp.dest("./npm/preline"));
}

function copyIndexJs() {
  return gulp
    .src(["./src/assets/vendor/preline/dist/index.js"])
    .pipe(gulp.dest("./npm/preline"));
}

function copyIndexDts() {
  return gulp
    .src(["./src/assets/vendor/preline/dist/index.d.ts"])
    .pipe(gulp.dest("./npm/preline"));
}

function createPrelineJs() {
  return gulp
    .src(["./src/assets/vendor/preline/dist/index.js"])
    .pipe(
      rename({
        dirname: "./",
        basename: "preline",
        extname: ".js",
      })
    )
    .pipe(gulp.dest("./npm/preline/dist"));
}

function copyPrelineJs() {
  return gulp
    .src(["./npm/preline/dist/preline.js"])
    .pipe(gulp.dest("./npm/preline"));
}

function createPrelineDts() {
  return gulp
    .src(["./src/assets/vendor/preline/dist/index.d.ts"])
    .pipe(
      rename({
        dirname: "./",
        basename: "preline",
        extname: ".d.ts",
      })
    )
    .pipe(gulp.dest("./npm/preline/dist"));
}

function copyPrelineDts() {
  return gulp
    .src(["./npm/preline/dist/preline.d.ts"])
    .pipe(gulp.dest("./npm/preline"));
}

gulp.task(
  "copyPrelineAllToNpm",
  gulp.series(
    clean,
    copy,
    copyIndexJs,
    copyIndexDts,
    createPrelineJs,
    copyPrelineJs,
    createPrelineDts,
    copyPrelineDts
  )
);
