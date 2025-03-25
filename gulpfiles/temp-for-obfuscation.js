/*
 * Gulp Builder
 * @version: 2.0.4
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */
const paths = require("./paths");

const gulp = require("gulp");
const replace = require("gulp-replace");
const rename = require("gulp-rename");
const del = require("del");

function cleanDist() {
  return del("./.obfuscated/**", { force: true });
}

function cleanTarget() {
  return del("./obfuscated/**", { force: true });
}

function copyPro() {
  return (
    gulp
      .src([
        paths.src.tmpPro.pro + "/**",
        "!" + paths.src.tmpPro.pro + "/assets",
      ])
      .pipe(
        replace(
          new RegExp("(\\.+\\/)+" + "node_modules" + "/.*\\.*", "g"),
          function (match) {
            return match.replace("../node_modules", "../../node_modules");
          }
        )
      )
      .pipe(replace(/(class=\\".*?)(\\")/g, "$1 $2"))
      .pipe(gulp.dest(paths.distForProObfuscation.pro.dir))
  );
}

function copyAssets() {
  return gulp
    .src([paths.src.tmpPro.base + "/assets/css/main.min.css"])
    .pipe(
      rename({
        basename: "obfuscated",
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(paths.distForProObfuscation.base.dir + "/assets/css"));
}

function injectObfuscatedCss() {
  return gulp
    .src([paths.distForProObfuscation.pro.dir + "/**/*.html"])
    .pipe(replace(/main.min.css/g, "obfuscated.min.css"))
    .pipe(gulp.dest(paths.distForProObfuscation.pro.dir));
}

gulp.task(
  "temp-for-obfuscation",
  gulp.series(cleanDist, cleanTarget, copyAssets, copyPro, injectObfuscatedCss)
);
