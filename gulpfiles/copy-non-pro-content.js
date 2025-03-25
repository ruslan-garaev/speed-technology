/*
 * Gulp Builder
 * @version: 2.0.4
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */
const paths = require("./paths");
const gulp = require("gulp");

function copyRoot() {
  return gulp
    .src([
      paths.limited.base.dir + "/*.html",
      paths.limited.base.dir + "/favicon.ico",
    ])
    .pipe(gulp.dest(paths.obfuscated.base.dir));
}

function copyDocs() {
  return gulp
    .src([paths.limited.docs.all])
    .pipe(gulp.dest(paths.obfuscated.base.dir + "/docs"));
}

function copyExamples() {
  return gulp
    .src([paths.limited.examples.all])
    .pipe(gulp.dest(paths.obfuscated.base.dir + "/examples"));
}

function copyPlugins() {
  return gulp
    .src([paths.limited.plugins.all])
    .pipe(gulp.dest(paths.obfuscated.base.dir + "/plugins"));
}

function copyAssets() {
  return gulp
    .src([paths.limited.base.dir + "/assets/**/*"])
    .pipe(gulp.dest(paths.obfuscated.base.dir + "/assets"));
}

gulp.task(
  "copy-non-pro-content",
  gulp.series(copyRoot, copyDocs, copyExamples, copyPlugins, copyAssets)
);
