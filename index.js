/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */
"use strict";

require("./lib/array/index");
require("./lib/date/index");
require("./lib/math/index");
require("./lib/string/index");

module.exports = {
  ...require("./lib/object/index"),
};
