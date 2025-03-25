/*
 * Gulp Builder (Watch)
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
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
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const cached = require("gulp-cached");
const replace = require("gulp-replace");

const through2 = require("through2");
const Throttle = require("throttle");
const multer = require("multer");
const plumber = require("gulp-plumber");

const fileUpload = multer({ dest: "__uploads/" });
let url = null;
const envArgs = {
  isPro: "true",
  isForDownload: "false",
  ...gulpTaskArgs,
};
let currentFileBeingProcessed = "";

function handleUpload(req, res, next) {
  if (req.method === "POST" && req.url === "/upload") {
    const throttleStream = new Throttle(200 * 1024);

    req.pipe(throttleStream).on("data", (_) => {
      console.log("Receiving data chunk");
    });

    fileUpload.single("file")(req, res, function (err) {
      if (err) {
        console.error("Error uploading file:", err);

        return res.end("Error uploading file.");
      }
      
      res.end("File is uploaded");
    });
  } else {
    next();
  }
}

function basicMiddleware(req, res, next) {
  if (
    /\.json|\.txt|\.html/.test(req.url) &&
    req.method.toUpperCase() == "POST"
  ) {
    req.method = "GET";
  }

  url = req.url;
  var index = 0;
  index = req.url.indexOf("?");

  if (index == -1) {
    index = req.url.indexOf("#");
  }
  if (index != -1) {
    url = req.url.substring(0, index);
  }

  var filename =
    __dirname.replace("gulpfiles", "") +
    paths.src.tmp.dir.replace("./", "") +
    url;
  if (url.split(".").pop() === "html") {
    fileInclude(() => {
      if (fs.existsSync(filename)) {
        var html = fs.readFileSync(filename, "utf8");
        res.end(html);
      } else {
        res.end("Oops, page not found.");
      }
    });
  } else {
    next();
  }
}

function browserSync(done) {
  browsersync.init({
    files: "./*.html",
    startPath: config.startPath,
    server: {
      baseDir: [paths.src.tmp.dir, paths.src.base.dir, paths.root],
      middleware: [handleUpload, basicMiddleware],
    },
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function fileIncludeAll() {
  return gulp
    .src([
      paths.src.html.files,
      "!" + paths.src.assets.files,
      "!" + paths.src.tmp.files,
      "!" + paths.src.partials.files,
    ])
    .pipe(
      through2.obj(function (file, enc, cb) {
        currentFileBeingProcessed = file.path;
        this.push(file);
        cb();
      })
    )
    .pipe(cached())
    .pipe(
      replace(/@@autopath/g, function (match) {
        return pathLevel(this.file);
      })
    )
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.error(`Error occurred in file: ${currentFileBeingProcessed}`);
          console.error(`Error message: ${err.message}`);
          // process.exit(1);
          // this.emit("end");
        },
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
      replace(/@@autopath/g, function (match) {
        return pathLevel(this.file);
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
    .pipe(gulp.dest(paths.src.tmp.dir));
}

function fileInclude(callback = {}) {
  return Promise.all([
    new Promise(function (resolve, reject) {
      gulp
        .src([
          paths.src.html.dir + url.slice(0, 1) + "*" + url.slice(1),
          "!" + paths.src.assets.files,
          "!" + paths.src.tmp.files,
          "!" + paths.src.partials.files,
        ])
        .pipe(
          through2.obj(function (file, enc, cb) {
            currentFileBeingProcessed = file.path;
            this.push(file);
            cb();
          })
        )
        .pipe(
          replace(/@@autopath/g, function (match) {
            return pathLevel(this.file);
          })
        )
        .pipe(
          plumber({
            errorHandler: function (err) {
              console.error(
                `Error occurred in file: ${currentFileBeingProcessed}`
              );
              console.error(`Error message: ${err.message}`);
              // process.exit(1);
              // this.emit("end");
            },
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
          replace(/@@autopath/g, function (match) {
            return pathLevel(this.file);
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
        .pipe(gulp.dest(paths.src.tmp.dir))
        .on("end", resolve);
    }),
  ]).then(function () {
    callback();
  });
}

function clean() {
  return del(paths.src.tmp.dir + "/**", { force: true });
}

function watch() {
  gulp.watch(
    [paths.src.html.files, paths.src.partials.files],
    gulp.series(fileInclude, browserSyncReload)
  );
}

gulp.task("defaultWatch", watch);

gulp.task(
  "defaultBuild",
  gulp.series(clean, fileIncludeAll, svgCompiler, browserSync)
);

gulp.task("default", gulp.series("defaultBuild", "defaultWatch"));
