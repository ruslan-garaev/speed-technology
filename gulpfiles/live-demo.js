/*
 * Gulp Builder (liveDemo)
 * @version: 2.1.0
 * @author: Htmlstream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */
const del = require("del");

const {
  config,
  context,
  pathLevel,
  shieldingVariables,
  shieldingFunctions,
  additionNames,
  gulpLighten,
  gulpDarken,
  gulpRGBA,
  gulpTaskArgs,
} = require("./core");
const paths = require("./paths");
const { svgCompiler } = require("./svg-compiler");

const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const replace = require("gulp-replace");
const deleteLines = require("gulp-delete-lines");
const rename = require("gulp-rename");
const prettify = require("gulp-prettify");
const envArgs = {
  isPro: "true",
  isForDownload: "false",
  ...gulpTaskArgs,
};
const distDir = envArgs.isPro === "true" ? paths.dist : paths.limited;

let node = [],
  nodeModules = [],
  skippedFiles = [];

function fileInclude() {
  return gulp
    .src([
      paths.src.html.files,
      `!${paths.src.assets.files}`,
      `!${paths.src.tmp.files}`,
      `!${paths.src.partials.files}`,
    ])
    .pipe(
      replace(/@@autopath/g, function () {
        return pathLevel(this.file);
      })
    )
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        indent: true,
        context: {
          ...context,
          isPro: envArgs.isPro,
          isForDownload: envArgs.isForDownload,
        },
      })
    )
    .pipe(
      replace(/@@autopath/g, function () {
        return pathLevel(this.file);
      })
    )
    .pipe(
      replace(
        new RegExp(`(\\.+\\/)+${additionNames.css}/.*\\.css`, "g"),
        function (match) {
          return match.replace(".css", ".min.css");
        }
      )
    )
    .pipe(
      replace(
        new RegExp(`(\\.+\\/)+node_modules/.*\\.*`, "g"),
        function (match) {
          path = match.replace(/(\.+\/)+/, "");
          splittedPath = path.split("/");

          nodeModules.push(`./${splittedPath[0]}/*${splittedPath[1]}/**`);

          return match;
        }
      )
    )
    .pipe(
      replace(
        new RegExp(`(src|href)([^\\s]+)(\\.+\\/)+node_modules/.*\\.*`, "g"),
        function (match, p1) {
          path = match.replace(/(\.+\/)+/, "");
          splittedPath = path.split("/");

          node.push(`./${splittedPath[0]}/*${splittedPath[1]}/**`);

          return match.replace(
            "node_modules",
            distDir.vendor.dir.replace(`${distDir.base.dir}/`, "")
          );
        }
      )
    )
    .pipe(
      replace(/gulpLighten\[(.*?)\]/g, function (_, p1) {
        return gulpLighten(p1);
      })
    )
    .pipe(
      replace(/gulpDarken\[(.*?)\]/g, function (_, p1) {
        return gulpDarken(p1);
      })
    )
    .pipe(
      replace(/gulpRGBA\[(.*?)\]/g, function (_, p1) {
        return gulpRGBA(p1);
      })
    )
    .pipe(
      deleteLines({
        filters: [new RegExp(config.deleteLine, "i")],
      })
    )
    .pipe(
      deleteLines({
        filters: [new RegExp(config["deleteLine:dist"], "i")],
      })
    )
    .pipe(
      deleteLines({
        filters: [/<!-- bundlecss:vendor \[(.*?)\](.*)-->/i],
      })
    )
    .pipe(
      deleteLines({
        filters: [/<!-- bundlecss:theme \[(.*?)\](.*)-->/i],
      })
    )
    .pipe(
      deleteLines({
        filters: [/<!-- bundlejs:vendor \[(.*?)\](.*)-->/i],
      })
    )
    .pipe(replace(new RegExp(config["deleteLine:build"], "g"), ""))
    .pipe(
      replace(/<!-- bundlejs:theme \[(.*?)\](.*)-->/g, function (math, p1, p2) {
        return `<script src="${p1}/${distDir.build.js}/${config.fileNames.dist.js}${p2.trim()}"></script>`;
      })
    )
    .pipe(
      replace(/(\[\@\@\]).*?/g, function (match, p1) {
        return shieldingVariables(match, p1);
      })
    )
    .pipe(
      replace(/(\[@\@F\]).*?/g, function (match, p1) {
        return shieldingFunctions(match, p1);
      })
    )
    .pipe(
      prettify({
        indent_inner_html: false,
        unformatted: ["pre", "code", "script"],
        preserve_newlines: true,
      })
    )
    .pipe(gulp.dest(distDir.base.dir));
}

function minCSS() {
  return gulp
    .src(paths.src.css.files)
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(distDir.css.dir));
}

function CSS() {
  return gulp.src(paths.src.css.files).pipe(gulp.dest(distDir.css.dir));
}

function copy() {
  return gulp
    .src([
      `${paths.src.assets.dir}/**`,
      `!${paths.src.scss.dir}/**`,
      `!${paths.src.svg.dir}/**`,
      `!${paths.src.css.dir}/**`,
    ])
    .pipe(gulp.dest(distDir.assets.dir));
}

function copyNode() {
  nodeModules = new Set(nodeModules);

  if ([...nodeModules].length) {
    return gulp.src([...nodeModules]).pipe(gulp.dest(distDir.vendor.dir));
  } else {
    return new Promise(function (resolve) {
      resolve();
    });
  }
}

function copySkippedFiles() {
  skippedFiles = new Set(skippedFiles);

  if ([...skippedFiles].length) {
    return gulp.src([...skippedFiles]).pipe(gulp.dest(distDir.base.dir));
  } else {
    return new Promise(function (resolve) {
      resolve();
    });
  }
}

function copyDependencies() {
  for (var k in config.copyDependencies.dist) {
    path = k;

    if (k.search("node_modules") !== 0) {
      path = `./src/${k}`;
    }

    gulp
      .src(path)
      .pipe(
        gulp.dest(`${distDir.base.dir}/${config.copyDependencies.dist[k]}`)
      );
  }

  return new Promise(function (resolve) {
    resolve();
  });
}

function copyDocsAssets() {
  return gulp
    .src(`${paths.src.base.dir}/docs/assets/**/*`)
    .pipe(gulp.dest(`${distDir.base.dir}/docs/assets`));
}

function copyProAssets() {
  return gulp
    .src(`${paths.src.base.dir}/pro/assets/**/*`)
    .pipe(gulp.dest(`${distDir.base.dir}/pro/assets`));
}

function copyFavicon() {
  return gulp
    .src(`${paths.src.base.dir}/favicon.ico`)
    .pipe(gulp.dest(distDir.base.dir));
}

function clean() {
  return del(distDir.base.dir, { force: true });
}

gulp.task(
  "live-demo",
  gulp.series(
    clean,
    fileInclude,
    CSS,
    minCSS,
    svgCompiler,
    copy,
    copyNode,
    copySkippedFiles,
    copyDependencies,
    copyDocsAssets,
    copyProAssets,
    copyFavicon
  )
);
