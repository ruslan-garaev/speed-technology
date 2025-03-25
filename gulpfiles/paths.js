/*
 * Gulp Builder (Paths)
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */

const config = require("../config");
const { additionNames } = require("./core");

config.directoryNames = { ...config.directoryNames, ...additionNames };

module.exports = {
  root: "./",
  node: {
    dir: "node_modules",
  },
  src: {
    base: {
      dir: config.directoryNames.src,
      files: config.directoryNames.src + "/**/*",
    },
    assets: {
      dir: config.directoryNames.src + "/" + config.directoryNames.assets,
      files:
        config.directoryNames.src +
        "/" +
        config.directoryNames.assets +
        "/**/*",
    },
    vendor: {
      dir: config.directoryNames.src + "/" + config.directoryNames.vendor,
    },
    css: {
      dir: config.directoryNames.src + "/" + config.directoryNames.css,
      files:
        config.directoryNames.src + "/" + config.directoryNames.css + "/**/*",
    },
    scss: {
      dir: config.directoryNames.src + "/" + config.directoryNames.scss,
      files:
        config.directoryNames.src +
        "/" +
        config.directoryNames.scss +
        "/**/*.scss",
    },
    js: {
      dir: config.directoryNames.src + "/" + config.directoryNames.js,
      files:
        config.directoryNames.src + "/" + config.directoryNames.js + "/*.js",
    },
    partials: {
      files: config.directoryNames.src + "/partials/**/*",
    },
    html: {
      dir: config.directoryNames.src,
      files: config.directoryNames.src + "/**/*.html",
      rootFiles: config.directoryNames.src + "/*.html",
    },
    tmp: {
      dir: config.directoryNames.src + "/.tmp",
      files: config.directoryNames.src + "/.tmp/**/*",
    },
    svg: {
      dir:
        config.directoryNames.src +
        "/" +
        config.directoryNames.assets +
        "/svg-src",
      files:
        config.directoryNames.src +
        "/" +
        config.directoryNames.assets +
        "/svg-src/**/*.svg",
    },
    tmpPro: {
      base: config.directoryNames.limited + "/",
      baseFiles: config.directoryNames.limited + "/assets/**/*",
      pro: config.directoryNames.limited + "/pro",
      proFiles: config.directoryNames.limited + "/pro/**/*",
      docs: config.directoryNames.limited + "/docs",
      docsFiles: config.directoryNames.limited + "/docs/**/*",
    },
    obfuscated: {
      base: config.directoryNames.limited + "/",
      baseFiles: config.directoryNames.limited + "/assets/**/*",
      pro: config.directoryNames.limited + "/pro",
      proFiles: config.directoryNames.limited + "/pro/**/*",
      docs: config.directoryNames.limited + "/docs",
      docsFiles: config.directoryNames.limited + "/docs/**/*",
    },
    pro: {
      dir: config.directoryNames.src + "/pro",
      files: config.directoryNames.src + "/pro/**/*",
      rootFiles: config.directoryNames.src + "/pro/*.html",
    },
    docs: {
      dir: config.directoryNames.src + "/docs",
      files: config.directoryNames.src + "/docs/**/*",
    },
    examples: {
      dir: config.directoryNames.src + "/examples",
      files: config.directoryNames.src + "/examples/**/*",
    },
    plugins: {
      dir: config.directoryNames.src + "/plugins",
      files: config.directoryNames.src + "/plugins/**/*",
    },
    scripts: {
      dir: config.directoryNames.src + "/scripts",
      files: config.directoryNames.src + "/scripts/**/*",
    },
    templates: {
      dir: config.directoryNames.src + "/templates",
      files: config.directoryNames.src + "/templates/**/*",
    },
  },
  dist: {
    base: {
      dir: config.directoryNames.dist,
    },
    build: {
      css: config.directoryNames.css,
      js: config.directoryNames.js,
    },
    css: {
      dir: config.directoryNames.dist + "/" + config.directoryNames.css,
      files:
        config.directoryNames.dist + "/" + config.directoryNames.css + "/*.css",
    },
    js: {
      dir: config.directoryNames.dist + "/" + config.directoryNames.js,
      files:
        config.directoryNames.dist + "/" + config.directoryNames.js + "/*.js",
    },
    vendor: {
      dir: config.directoryNames.dist + "/" + config.directoryNames.vendor,
    },
    assets: {
      dir: config.directoryNames.dist + "/" + config.directoryNames.assets,
    },
    docs: {
      dir: config.directoryNames.dist + "/docs",
      all: config.directoryNames.dist + "/docs/**/*",
    },
    examples: {
      dir: config.directoryNames.dist + "/examples",
      all: config.directoryNames.dist + "/examples/**/*",
    },
    plugins: {
      dir: config.directoryNames.dist + "/plugins",
      all: config.directoryNames.dist + "/plugins/**/*",
    },
  },
  limited: {
    base: {
      dir: config.directoryNames.limited,
    },
    build: {
      css: config.directoryNames.css,
      js: config.directoryNames.js,
    },
    css: {
      dir: config.directoryNames.limited + "/" + config.directoryNames.css,
      files:
        config.directoryNames.limited +
        "/" +
        config.directoryNames.css +
        "/*.css",
    },
    js: {
      dir: config.directoryNames.limited + "/" + config.directoryNames.js,
      files:
        config.directoryNames.limited +
        "/" +
        config.directoryNames.js +
        "/*.js",
    },
    vendor: {
      dir: config.directoryNames.limited + "/" + config.directoryNames.vendor,
    },
    assets: {
      dir: config.directoryNames.limited + "/" + config.directoryNames.assets,
    },
    docs: {
      dir: config.directoryNames.limited + "/docs",
      all: config.directoryNames.limited + "/docs/**/*",
    },
    examples: {
      dir: config.directoryNames.limited + "/examples",
      all: config.directoryNames.limited + "/examples/**/*",
    },
    plugins: {
      dir: config.directoryNames.limited + "/plugins",
      all: config.directoryNames.limited + "/plugins/**/*",
    },
  },
  download: {
    base: {
      dir: config.directoryNames.download,
    },
    build: {
      css: config.directoryNames.css,
      js: config.directoryNames.js,
    },
    css: {
      dir: config.directoryNames.download + "/" + config.directoryNames.css,
      files:
        config.directoryNames.download + "/" + config.directoryNames.css + "/*.css",
    },
    js: {
      dir: config.directoryNames.download + "/" + config.directoryNames.js,
      files:
        config.directoryNames.download + "/" + config.directoryNames.js + "/*.js",
    },
    vendor: {
      dir: config.directoryNames.download + "/" + config.directoryNames.vendor,
    },
    assets: {
      dir: config.directoryNames.download + "/" + config.directoryNames.assets,
    },
    docs: {
      dir: config.directoryNames.download + "/docs",
      all: config.directoryNames.download + "/docs/**/*",
    },
    examples: {
      dir: config.directoryNames.download + "/examples",
      all: config.directoryNames.download + "/examples/**/*",
    },
    plugins: {
      dir: config.directoryNames.download + "/plugins",
      all: config.directoryNames.download + "/plugins/**/*",
    },
  },
  distForProObfuscation: {
    base: {
      dir: config.directoryNames.distForProObfuscation,
    },
    docs: {
      dir: config.directoryNames.distForProObfuscation + "/docs",
    },
    pro: {
      dir: config.directoryNames.distForProObfuscation + "/pro",
    },
    build: {
      css: config.directoryNames.css,
      js: config.directoryNames.js,
    },
    css: {
      dir:
        config.directoryNames.distForProObfuscation +
        "/" +
        config.directoryNames.css,
      files:
        config.directoryNames.distForProObfuscation +
        "/" +
        config.directoryNames.css +
        "/*.css",
    },
    js: {
      dir:
        config.directoryNames.distForProObfuscation +
        "/" +
        config.directoryNames.js,
      files:
        config.directoryNames.distForProObfuscation +
        "/" +
        config.directoryNames.js +
        "/*.js",
    },
    vendor: {
      dir:
        config.directoryNames.distForProObfuscation +
        "/" +
        config.directoryNames.vendor,
    },
    assets: {
      dir:
        config.directoryNames.distForProObfuscation +
        "/" +
        config.directoryNames.assets,
    },
  },
  obfuscated: {
    base: {
      dir: config.directoryNames.obfuscated,
    },
    assets: {
      dir: config.directoryNames.obfuscated + "/assets",
    },
  },
  // Need to check
  build: {
    base: {
      dir: config.directoryNames.build,
    },
    html: {
      dir: config.directoryNames.src + "/" + config.buildFolder,
      files: config.buildFolder.length
        ? config.directoryNames.src + "/*" + config.buildFolder + "/**/*.html"
        : config.directoryNames.src + "/**/*.html",
    },
    build: {
      css: config.directoryNames.css,
      js: config.directoryNames.js,
    },
    css: {
      dir: config.directoryNames.build + "/" + config.directoryNames.css,
    },
    js: {
      dir: config.directoryNames.build + "/" + config.directoryNames.js,
    },
    vendor: {
      dir: config.directoryNames.build + "/" + config.directoryNames.vendor,
    },
  },
  github: {
    base: {
      dir: config.directoryNames.github,
    },
    build: {
      css: config.directoryNames.css,
      js: config.directoryNames.js,
    },
    css: {
      dir: config.directoryNames.github + "/" + config.directoryNames.css,
      files:
        config.directoryNames.github +
        "/" +
        config.directoryNames.css +
        "/*.css",
    },
    js: {
      dir: config.directoryNames.github + "/" + config.directoryNames.js,
      files:
        config.directoryNames.github + "/" + config.directoryNames.js + "/*.js",
    },
    vendor: {
      dir: config.directoryNames.github + "/" + config.directoryNames.vendor,
    },
    assets: {
      dir: config.directoryNames.github + "/" + config.directoryNames.assets,
    },
  },
};
