/**
 * function (msg, v1, v2, key) { } or if boolean then after function true will be changed to message.
 */
module.exports.default = class EqualFalseResult {
  constructor(msg, v1, v2, key) {
    this.msg = msg;
    this.v1 = v1;
    this.v2 = v2;
    this.key = key;

    this.toString = function () {
      var self = this;

      function addKeys(v) {
        if (self.key) {
          var nestedValue = self[v];
          if (Array.isArray(nestedValue)) nestedValue = "[]";
          else if (typeof nestedValue === "function") nestedValue = "fnc()";
          return v + self.key + ` {${nestedValue}}`;
        }
        return v;
      }
      return this.msg.replace("v1", addKeys("v1")).replace("v2", addKeys("v2")); //todo maybe wrong
    };
  }
};
