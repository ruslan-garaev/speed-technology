/*
 * Gulp Builder (download version)
 * @version: 2.1.0
 * @author: Htmlstream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */
const del = require("del");
const fs = require("fs");

const { context, pathLevel, additionNames, gulpTaskArgs } = require("./core");
const paths = require("./paths");

const gulp = require("gulp");
const gulpIf = require("gulp-if");
const fileinclude = require("gulp-file-include");
const replace = require("gulp-replace");
const rename = require("gulp-rename");
const prettify = require("gulp-prettify");
const cheerio = require("gulp-cheerio");
const envArgs = {
  isForDownload: "false",
  ...gulpTaskArgs,
};
const distDir = paths.download;

let node = [],
  nodeModules = [];

function clean() {
  return del(distDir.base.dir, { force: true });
}

function fileInclude() {
  return gulp
    .src([
      paths.src.html.files,
      `!${paths.src.html.dir}/pro/examples/**/*.html`,
      `!${paths.src.html.dir}/pro/*.html`,
      `!${paths.src.assets.files}`,
      `!${paths.src.html.rootFiles}`,
      `!${paths.src.tmp.files}`,
      `!${paths.src.partials.files}`,
      `!${paths.src.docs.files}`,
      `!${paths.src.examples.files}`,
      `!${paths.src.plugins.files}`,
      `!${paths.src.scripts.files}`,
      `!${paths.src.templates.files}`,
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
      replace(/href="(.*?)((\.\.\/)*)assets/g, function (match, p1, p2) {
        return 'href="' + (p2 ? p2.slice(0, -3) : "./") + "assets";
      })
    )
    .pipe(
      replace(/href=&quot;(.*?)((\.\.\/)*)assets/g, function (match, p1, p2) {
        return "href=&quot;" + (p2 ? p2.slice(0, -3) : "./") + "assets";
      })
    )
    .pipe(
      replace(/src="(.*?)((\.\.\/)*)assets/g, function (match, p1, p2) {
        if (this.file.dirname.slice(-4) === "/pro") return 'src="./assets';

        return 'src="' + (p2 ? p2.slice(0, -3) : "./") + "assets";
      })
    )
    .pipe(
      replace(/src=&quot;(.*?)((\.\.\/)*)assets/g, function (match, p1, p2) {
        if (this.file.dirname.slice(-4) === "/pro") return "src=&quot;./assets";

        return "src=&quot;" + (p2 ? p2.slice(0, -3) : "./") + "assets";
      })
    )
    .pipe(
      replace(/src=\\&quot;(.*?)((\.\.\/)*)assets/g, function (match, p1, p2) {
        if (this.file.dirname.slice(-4) === "/pro")
          return "src=\\&quot;./assets";

        return "src=\\&quot;" + (p2 ? p2.slice(0, -3) : "./") + "assets";
      })
    )
    .pipe(
      replace(/src=\\"(.*?)((\.\.\/)*)assets/g, function (match, p1, p2) {
        if (this.file.dirname.slice(-4) === "/pro") return 'src=\\"./assets';

        return 'src=\\"' + (p2 ? p2.slice(0, -3) : "./") + "assets";
      })
    )
    .pipe(
      replace(/href="(.*?)((\.\.\/)*)favicon/g, function (match, p1, p2) {
        return 'href="' + (p2 ? p2.slice(0, -3) : "./") + "favicon";
      })
    )
    .pipe(
      replace(/href=&quot;(.*?)((\.\.\/)*)favicon/g, function (match, p1, p2) {
        return "href=&quot;" + (p2 ? p2.slice(0, -3) : "./") + "favicon";
      })
    )
    .pipe(
      replace(/url\('(.*?)((\.\.\/)*)node_modules/g, function (match, p1, p2) {
        return "url('" + (p2 ? p2.slice(0, -3) : "./") + "assets/vendor";
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

async function processSection(section) {
  await fs
    .readdirSync(`${distDir.base.dir}/pro/${section}`, {
      withFileTypes: true,
    })
    .forEach((file) => {
      processFile(file.name, section);
    });
}

function processFile(file, section = null) {
  gulp
    .src(
      section
        ? `${distDir.base.dir}/pro/${section}/${file}`
        : `${distDir.base.dir}/pro/${file}`
    )
    .pipe(
      cheerio(function ($, _) {
        _extractAssetsFromHtml($.html());
      })
    );
}

function prepareAssets(done) {
  fs.readdirSync(`${distDir.base.dir}/pro`, { withFileTypes: true }).forEach(
    (file) => {
      if (file.name.slice(-5) === ".html") processFile(file.name);
      else processSection(file.name);
    }
  );

  done();
}

function copyFavicon() {
  return gulp
    .src(`${paths.src.base.dir}/favicon.ico`)
    .pipe(gulp.dest(`${distDir.base.dir}/pro`));
}

// Helpers
function _removeQueryParams(str, param) {
  const index = str.indexOf(param);

  if (index !== -1) {
    return str.substring(0, index);
  }

  return str;
}

function _extractAssetsFromHtml(htmlContent) {
  const assetTypes = ["css", "js", "svg", "img", "thumbnails", "vendor"];
  const copied = [];

  assetTypes.forEach((type) => {
    const regex = new RegExp(`assets\/${type}.*?(&quot;|"|&apos;|')`, "g");
    let match;

    while ((match = regex.exec(htmlContent)) !== null) {
      const assetRoot = match[0]
        .replace(/\\&quot;/g, "")
        .replace(/&quot;/g, "")
        .replace(/&quot;/g, "")
        .replace(/\\&apos;/g, "")
        .replace(/&apos;/g, "")
        .replace(/&apos;/g, "")
        .replace(/"/g, "")
        .replace(/'/g, "")
        .substring(`assets/${type}/`.length);
      const pathToArray = _removeQueryParams(assetRoot, "?v=").split("/");
      let assetPath = _removeQueryParams(
        `${paths.src.base.dir}/assets/${type}/${assetRoot}`,
        "?v="
      );

      if (type === "css" && assetPath.includes(".min.css"))
        assetPath = assetPath.replace(".min", "");
      let nodePath = _removeQueryParams(
        `${paths.node.dir}/${assetRoot}`,
        "?v="
      );
      if (type === "css" && nodePath.includes(".min.css"))
        nodePath = nodePath.replace(".min", "");

      if (assetPath.includes("svg-country-flags") && type === "vendor") {
        if (copied.includes(pathToArray[0])) continue;

        gulp
          .src(`${paths.node.dir}/svg-country-flags/**/*`)
          .pipe(
            gulp.dest(
              `${distDir.base.dir}/pro/assets/${type}/svg-country-flags`
            )
          );

        copied.push(pathToArray[0]);
      } else if (fs.existsSync(assetPath) && type === "vendor") {
        if (copied.includes(pathToArray[0])) continue;

        gulp
          .src([
            `${paths.src.base.dir}/assets/${type}/${pathToArray[0]}/**/*`,
            `!${paths.src.base.dir}/assets/${type}/${pathToArray[0]}/node_modules/**/*`,
          ])
          .pipe(
            gulp.dest(
              `${distDir.base.dir}/pro/assets/${type}/${pathToArray[0]}`
            )
          );

        copied.push(pathToArray[0]);
      } else if (fs.existsSync(nodePath) && type === "vendor") {
        if (copied.includes(pathToArray[0])) continue;

        gulp
          .src(`${paths.node.dir}/${pathToArray[0]}/**/*`)
          .pipe(
            gulp.dest(
              `${distDir.base.dir}/pro/assets/${type}/${pathToArray[0]}`
            )
          );

        copied.push(pathToArray[0]);
      } else if (fs.existsSync(assetPath) && type !== "vendor") {
        pathToArray.pop();

        gulp
          .src(assetPath)
          .pipe(gulpIf(type === "css", rename({ suffix: ".min" })))
          .pipe(
            gulp.dest(
              `${distDir.base.dir}/pro/assets/${type}/${pathToArray.join("/")}`
            )
          );
      }
    }
  });
}

gulp.task(
  "download-version",
  gulp.series(clean, fileInclude, prepareAssets, copyFavicon)
);
