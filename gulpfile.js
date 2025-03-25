/*
 * Gulpfile
 * @version: 2.1.0
 * @author: HtmlStream
 * @license: Htmlstream (https://htmlstream.com/licenses)
 * Copyright 2023 Htmlstream
 */

require("./gulpfiles/watch");
// require("./gulpfiles/watch-test");
require("./gulpfiles/dist");
require("./gulpfiles/live-demo");
require("./gulpfiles/download-version");
require("./gulpfiles/download-version-for-each-template");
require("./gulpfiles/build");
require("./gulpfiles/preview");
require("./gulpfiles/package");
require("./gulpfiles/copy-preline-all-to-npm");
require("./gulpfiles/copy-preline-each-to-npm");
require("./gulpfiles/temp-for-obfuscation");
require("./gulpfiles/copy-non-pro-content");
