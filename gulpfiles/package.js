/*
* Gulp Builder (Package)
* @version: 1.0.0 (Fri, 08 May 2020)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

const del                                                               = require('del');

const {config, context, pathLevel, shieldingVariables, additionNames}   = require('./core');
const paths                                                             = require('./paths');
const {svgCompiler}                                                     = require('./svg-compiler')

const gulp                                                              = require('gulp');
const fileinclude                                                       = require('gulp-file-include');
const replace                                                           = require('gulp-replace');
const deleteLines                                                       = require('gulp-delete-lines');
const concat                                                            = require('gulp-concat');
const uglify                                                            = require('gulp-uglify-es').default;
const cleanCSS                                                          = require('gulp-clean-css');
const rename                                                            = require('gulp-rename');
const autoprefixer                                                      = require('gulp-autoprefixer');

function package() {
  return gulp
    .src([
      "./*src/**",
      "./*gulpfiles/**",
      "./config.js",
      "./package-lock.json",
      "./package.json",
      "./README.md",
      "!./gulpfiles/preview.js",
      "!./gulpfiles/package.js",
      "!./gulpfiles/debuger.js",
      "!./gulpfiles/preview-with-space.js",
      "!.src/.tmp"
    ])
    .pipe(replace(/\<\!\-\- ONLY DEV \-\-\>(.|\n)*?\<\!\-\- END ONLY DEV \-\-\>\s+/g, ''))
    .pipe(replace(/\/\/ ONLY DEV(.|\n)*?\/\/ END ONLY DEV\s+/g, ''))
    .pipe(gulp.dest('./front'))
}

function removeFromGulpfile() {
  return gulp
    .src([
      "./gulpfile.js",
    ])
    .pipe(deleteLines({
      'filters': [
        /require\(\'\.\/gulpfiles\/package\'\)/g
      ]
    }))
    .pipe(deleteLines({
      'filters': [
        /require\(\'\.\/gulpfiles\/preview\'\)/g
      ]
    }))
    .pipe(deleteLines({
      'filters': [
        /require\(\'\.\/gulpfiles\/preview-with-space\'\)/g
      ]
    }))
    .pipe(gulp.dest('./front'))
}

function clean() {
  return del("./front", {force: true});
}

let node = [],
  skipedFiles = [];

function fileInclude() {
  return gulp
    .src([
      paths.src.html.files,
      '!' + paths.src.assets.files,
      '!' + paths.src.tmp.files,
      '!' + paths.src.partials.files
    ])
    .pipe(replace(/@@autopath/g, function (match) {
      return pathLevel(this.file)
    }))
    .pipe(replace(/\<\!\-\- ONLY DEV \-\-\>(.|\n)*?\<\!\-\- END ONLY DEV \-\-\>\s+/g, ''))
    .pipe(replace(/\/\/ ONLY DEV(.|\n)*?\/\/ END ONLY DEV\s+/g, ''))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true,
      context: context
    }))
    .pipe(replace(/@@autopath/g, function (match) {
      return pathLevel(this.file)
    }))
    .pipe(replace(new RegExp('(\\.+\\/)+' + additionNames.js + '\/.*\\.js', 'g'), function (match) {
      path = match.replace(/(\.+\/)+/, '')

      if (config.skipFilesFromBundle.dist.indexOf(path) < 0) {
        return match + " " + config.deleteLine
      } else {
        skipedFiles.push(paths.src.base.dir + "/*" + path)
      }

      return match
    }))
    .pipe(replace(new RegExp('(\\.+\\/)+' + additionNames.css + '\/.*\\.css', 'g'), function (match) {
      return match.replace('.css', '.min.css')
    }))
    .pipe(replace(new RegExp('(\\.+\\/)+' + "node_modules" + '\/.*\\.*', 'g'), function (match, p1) {
      path = match.replace(/(\.+\/)+/, '')
      splitedPath = path.split('/')

      node.push('./' + splitedPath[0] + '/*' + splitedPath[1] + '/**')

      return match.replace('node_modules', "./front/dist/assets/vendor".replace("./front/dist" + '/', ''))
    }))
    .pipe(deleteLines({
      'filters': [
        new RegExp(config.deleteLine, 'i')
      ]
    }))
    .pipe(deleteLines({
      'filters': [
        new RegExp(config["deleteLine:dist"], 'i')
      ]
    }))
    .pipe(deleteLines({
      'filters': [
        /<!-- bundlecss:vendor \[(.*?)\](.*)-->/i
      ]
    }))
    .pipe(deleteLines({
      'filters': [
        /<!-- bundlecss:theme \[(.*?)\](.*)-->/i
      ]
    }))
    .pipe(deleteLines({
      'filters': [
        /<!-- bundlejs:vendor \[(.*?)\](.*)-->/i
      ]
    }))
    .pipe(replace(new RegExp(config["deleteLine:build"], 'g'), ''))
    .pipe(replace(/<!-- bundlejs:theme \[(.*?)\](.*)-->/g, function (math, p1, p2) {
      return `<script src="${p1}/${paths.dist.build.js}/${config.fileNames.dist.js}${p2.trim()}"></script>`;
    }))
    .pipe(replace(/(\[\@\@\]).*?/g, function (match, p1) {
      return shieldingVariables(match, p1);
    }))
    .pipe(gulp.dest("./front/dist"))
};

function minCSS() {
  return gulp
    .src(paths.src.css.files)
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./front/dist/assets/css"))
}

function minJS() {
  let bundle = [paths.src.js.dir + '/hs.core.js', paths.src.js.files];

  config.skipFilesFromBundle.dist.forEach(file => {
    bundle.push("!" + paths.src.base.dir + "/*" + file)
  })

  if (bundle.length) {
    return gulp
      .src(bundle)
      .pipe(concat(config.fileNames.dist.js))
      .pipe(uglify())
      .pipe(gulp.dest("./front/dist/assets/js"));
  } else {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  }
}

function copy() {
  return gulp
    .src([
      paths.src.assets.dir + '/**',
      '!' + paths.src.scss.dir + '/**',
      '!' + paths.src.svg.dir + '/**',
      '!' + paths.src.css.dir + '/**',
      '!' + paths.src.js.dir + '/**',
    ])
    .pipe(gulp.dest("./front/dist/assets"))
}

function copyNode() {
  node = new Set(node)

  if ([...node].length) {
    return gulp
      .src([...node])
      .pipe(gulp.dest("./front/dist/assets/vendor"));
  } else {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  }
}

function copySkipedFiles() {
  skipedFiles = new Set(skipedFiles)

  if ([...skipedFiles].length) {
    return gulp
      .src([...skipedFiles])
      .pipe(gulp.dest("./front/dist"));
  } else {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  }
}

function copyDependencies() {
  for (var k in config.copyDependencies.dist) {
    path = k;

    if (k.search('node_modules') !== 0) {
      path = './src' + '/' + k
    }

    gulp
      .src(path)
      .pipe(gulp.dest("./front/dist" + '/' + config.copyDependencies.dist[k]))
  }

  return new Promise(function (resolve, reject) {
    resolve();
  });
}

function copyFavicon() {
  return gulp
    .src(paths.src.base.dir + "/favicon.ico")
    .pipe(gulp.dest("./front/dist"));
}

function clean() {
  return del("./front", {force: true});
}

gulp.task('package', gulp.series(clean, package, removeFromGulpfile,  fileInclude, minCSS, minJS, svgCompiler, copy, copyNode, copySkipedFiles, copyDependencies, copyFavicon));