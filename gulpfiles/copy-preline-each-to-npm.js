/*
 * Gulp Builder (Preline single plugins for NPM)
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */
const gulp = require("gulp");
const rename = require("gulp-rename");
const jsonEditor = require("gulp-json-editor");
const path = require("path");
const fs = require("fs");
const del = require("del");

function clean() {
  return del("./npm/@preline/**", { force: true });
}

// Copy JS
function getPluginFiles() {
  return fs
    .readdirSync("./src/assets/vendor/preline/dist")
    .filter((file) => file.endsWith(".js") && !file.startsWith("index"));
}

function copyPlugin(plugin) {
  const pluginFolder = path.join(
    "./npm/@preline",
    path.basename(plugin, ".js")
  );
  const pluginTask = gulp
    .src(path.join("./src/assets/vendor/preline/dist", plugin))
    .pipe(
      rename({
        dirname: path.basename(plugin, ".js"),
        basename: "index",
        extname: ".js",
      })
    )
    .pipe(gulp.dest("./npm/@preline"));
  const licenseTask = gulp
    .src("./src/assets/vendor/preline/LICENSE")
    .pipe(gulp.dest(pluginFolder));
  const packageJsonTask = gulp
    .src("./gulp-helpers/package.json")
    .pipe(
      jsonEditor((json) => {
        json.name = `@preline/${path.basename(plugin, ".js")}`;

        return json;
      })
    )
    .pipe(gulp.dest(pluginFolder));

  return Promise.all([pluginTask, licenseTask, packageJsonTask]);
}

function copyPlugins() {
  const plugins = getPluginFiles();
  const tasks = plugins.map(copyPlugin);

  return Promise.all(tasks);
}

// Copy d.ts
function getDeclarationFiles() {
  return fs
    .readdirSync("./src/assets/vendor/preline/dist")
    .filter((file) => file.endsWith(".d.ts") && !file.startsWith("index"));
}

function copyDeclaration(declaration) {
  return gulp
    .src(path.join("./src/assets/vendor/preline/dist", declaration))
    .pipe(
      rename({
        dirname: path.basename(declaration, ".d.ts"),
        basename: "index",
        extname: ".d.ts",
      })
    )
    .pipe(gulp.dest("./npm/@preline"));
}

function copyDeclarations() {
  const declarations = getDeclarationFiles();
  const tasks = declarations.map(copyDeclaration);

  return Promise.all(tasks);
}

gulp.task(
  "copyPrelineEachToNpm",
  gulp.series(clean, copyPlugins, copyDeclarations)
);
