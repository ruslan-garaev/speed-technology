/*
 * Gulp Builder (Core)
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */

const userConfig = require("../config");

// Mutation
const mutator = {
  autopath: "@@autopath",
  deleteLine: "hs-builder:delete",
  "deleteLine:build": "hs-builder:build-delete",
  "deleteLine:dist": "hs-builder:dist-delete",
  previewMode: false,
};
const additionNames = {
  assets: "assets",
  css: "assets/css",
  js: "assets/js",
  scss: "assets/scss",
  svg: "assets/svg",
  vendor: "assets/vendor",
};
const context = {
  buildFolder: userConfig.buildFolder,
  fileNames: userConfig.fileNames,
  vars: userConfig.vars,
  startPath: userConfig.startPath,
  directoryNames: userConfig.directoryNames,
  languageDirection: userConfig.languageDirection,
};

module.exports.additionNames = additionNames;

module.exports.config = { ...mutator, ...userConfig };

module.exports.context = { ...mutator, ...context };

// Lighten color function
module.exports.gulpLighten = (p1) => {
  const options = p1.split(",");

  let col = options[0].toString();
  let amt = parseInt(options[1]);
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }
  var g = (num & 0x0000ff) + amt;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

// Darken color function
module.exports.gulpDarken = (p1) => {
  const options = p1.split(",");

  let col = options[0].toString();
  let amt = -parseInt(options[1]);
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }
  var g = (num & 0x0000ff) + amt;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

// Rgba convert function
module.exports.gulpRGBA = (p1) => {
  const options = p1.split(",");
  const hex = options[0].toString();
  const transparent = options[1].toString();

  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      transparent +
      ")"
    );
  }
  throw new Error("Bad Hex");
};

// Path level function
module.exports.pathLevel = (file, indent = 0, isMinus = false) => {
  relativePathLevels = file.relative.split(/\/|\\/).length - 1;

  if (isMinus) {
    relativePathLevels -= indent;
  } else {
    relativePathLevels += indent;
  }

  let level = "";

  if (relativePathLevels) {
    for (let i = 0; i < relativePathLevels; i++) {
      if (relativePathLevels === i + 1) {
        level = level + "..";
      } else {
        level = level + "../";
      }
    }
  } else {
    level = ".";
  }

  return level;
};

module.exports.shieldingVariables = (match, p1) => {
  return match.replace(p1, "@@");
};

module.exports.shieldingFunctions = (match, p1) => {
  return match.replace(p1, "gulp");
};

// Task args
module.exports.gulpTaskArgs = ((argList) => {
  let arg = {},
    a,
    opt,
    thisOpt,
    curOpt;

  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, "");

    if (opt === thisOpt) {
      if (curOpt) arg[curOpt] = opt;

      curOpt = null;
    } else {
      curOpt = opt;
      arg[curOpt] = true;
    }
  }

  return arg;
})(process.argv);
