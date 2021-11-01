(function () {
  "use strict";
  String.prototype.equal = require("./equal").default;
  String.prototype.toUpperCaseFirst = require("./toUpperCaseFirst").default;
  String.prototype.toLowerCaseFirst = require("./toLowerCaseFirst").default;
  String.prototype.toCamelCase = require("./toCamelCase").default;
  String.prototype.fromCamelCase = require("./fromCamelCase").default;
})();
