/*
 * Gulp Builder (Watch)
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2024 Htmlstream
 */

const fs = require("fs");
const del = require("del");

const {
  config,
  context,
  pathLevel,
  shieldingVariables,
  shieldingFunctions,
  gulpRGBA,
  gulpLighten,
  gulpDarken,
  gulpTaskArgs,
} = require("./core");
const paths = require("./paths");
const { svgCompiler } = require("./svg-compiler");

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const fileInclude = require("gulp-file-include");
const cached = require("gulp-cached");
const replace = require("gulp-replace");
let url = null;
const envArgs = {
  isPro: "true",
  isForDownload: "false",
  ...gulpTaskArgs,
};

function clean(path = `${paths.src.tmp.dir}/**`) {
  return del(path, { force: true });
}

function server(done) {
  browserSync.init({
    open: false,
    files: "./*.html",
    startPath: config.startPath,
    server: {
      baseDir: [paths.src.tmp.dir, paths.src.base.dir, paths.root],
      middleware: function (req, res, next) {
        let index = 0;
        let filename;

        if (
          /\.json|\.txt|\.html/.test(req.url) &&
          req.method.toUpperCase() == "POST"
        )
          req.method = "GET";

        url = req.url;
        index = req.url.indexOf("?");
        if (index == -1) index = req.url.indexOf("#");
        if (index != -1) url = req.url.substring(0, index);
        filename = `${__dirname.replace(
          "gulpfiles",
          ""
        )}${paths.src.tmp.dir.replace("./", "")}${url}`;

        if (url.split(".").pop() === "html") {
          if (fs.existsSync(filename)) {
            const _path = `./${filename.replace(/.*\/(src\/)/, "$1")}`;
            const _dest = paths.src.tmp.dir;

            autoPathReplace(true, [_path], _dest, 0, () => {
              includeFiles(true, [_path], _dest, () => {
                res.end(fs.readFileSync(filename, "utf8"));
              });
            });
          } else res.end("Oops, page not found.");
        } else next();
      },
    },
  });
  done();
}

function serverHotReload(done) {
  browserSync.reload();
  done();
}

function _autoPathProcess(path = null, dest = null, indent = 0) {
  return gulp
    .src(path)
    .on("data", function (file) {
      console.log("Processing file:", file.path, dest);
    })
    .pipe(
      replace(/@@autopath/g, function () {
        return pathLevel(this.file, indent);
      })
    )
    .pipe(gulp.dest(dest, { overwrite: true }));
}
function autoPathReplace(
  isWatch,
  path = [
    paths.src.html.files,
    `!${paths.src.assets.files}`,
    `!${paths.src.tmp.files}`,
  ],
  dest = paths.src.tmp.dir,
  indent = 0,
  cb = () => {}
) {
  console.log("autoPathReplace:", path);

  if (isWatch)
    return Promise.all([
      new Promise(function (res) {
        _autoPathProcess(path, dest, indent).on("end", res);
      }),
    ]).then(function () {
      cb();
    });
  else return _autoPathProcess(path, dest, indent);
}

function _includeFilesProcess(path = null, dest = null) {
  return gulp
    .src(path)
    .pipe(
      fileInclude({
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
      replace(/gulpLighten\[(.*?)\]/g, function (math, p1) {
        return gulpLighten(p1);
      })
    )
    .pipe(
      replace(/gulpDarken\[(.*?)\]/g, function (math, p1) {
        return gulpDarken(p1);
      })
    )
    .pipe(
      replace(/gulpRGBA\[(.*?)\]/g, function (math, p1) {
        return gulpRGBA(p1);
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
    .pipe(gulp.dest(dest, { overwrite: true }));
}
function includeFiles(
  isWatch,
  path = [
    paths.src.tmp.files,
    `!${paths.src.assets.files}`,
    `!${paths.src.partials.files}`,
    `!${paths.src.tmp.dir}/partials/**/*`,
    `!${paths.src.tmp.dir}/scripts/**/*`,
  ],
  dest = paths.src.tmp.dir,
  cb = () => {}
) {
  if (isWatch)
    return Promise.all([
      new Promise(function (res) {
        _includeFilesProcess(path, dest).on("end", res);
      }),
    ]).then(function () {
      cb();
    });
  else return _includeFilesProcess(path, dest);
}

function _deleteLastPartOfPath(path) {
  const lastIndex = path.lastIndexOf("/");

  if (lastIndex !== -1) return path.substring(0, lastIndex);

  return path;
}

function watch() {
  return gulp
    .watch([paths.src.html.files, paths.src.partials.files])
    .on("change", function (path) {
      const _path = path.replace("src/", "");

      return gulp.series(function __autoPathReplace() {
        autoPathReplace(
          true,
          `./src/${_path}`,
          `${paths.src.tmp.dir}/${_deleteLastPartOfPath(_path)}`,
          2,
          () =>
            includeFiles(
              true,
              `./src/.tmp/${_path}`,
              `${paths.src.tmp.dir}/${_deleteLastPartOfPath(_path)}`,
              () => serverHotReload(() => {})
            )
        );
      })();
    });
}

gulp.task(
  "default",
  gulp.series(
    () => clean(),
    () => autoPathReplace(false),
    () => includeFiles(false),
    svgCompiler,
    server,
    watch
  )
);
