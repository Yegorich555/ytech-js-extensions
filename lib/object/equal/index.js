const EqualOptions = require("./equalOptions").default;
const EqualFalseResult = require("./equalFalseResult").default;

module.exports.default = function equal(v1, v2, options) {
  "use strict";

  var opt = Object.assign({}, new EqualOptions(), options);

  function isEqual(v1, v2, curKey) {
    if (v1 === v2) return true;
    var type1 = typeof v1;
    var type2 = typeof v2;
    if (v1 == null || v2 == null) {
      if (v1 == null && v2 == null) return true;

      if (
        opt.ignoreFunctions &&
        (type1 === "function" || type2 === "function")
      ) {
        return true;
      }
      if (opt.ignoreEmptyArrays) {
        if (
          (Array.isArray(v1) && v1.length === 0) ||
          (Array.isArray(v2) && v2.length === 0)
        )
          return true;
      }

      return new EqualFalseResult(
        "only one value is null: v1 != v2",
        v1,
        v2,
        curKey
      );
    }

    if (opt.ignoreFunctions && type1 === "function" && type2 === "function") {
      return true;
    }

    if (type1 !== "object" || type2 !== "object") {
      return new EqualFalseResult("v1 !== v2", v1, v2, curKey);
    }
    if (Array.isArray(v1) || Array.isArray(v2)) {
      if (!Array.isArray(v2) || !Array.isArray(v1)) {
        return new EqualFalseResult(
          "some is not Array: v1 != v2",
          v1,
          v2,
          curKey
        );
      }
      if (v1.length !== v2.length) {
        return new EqualFalseResult(
          "different array lengths: v1 != v2",
          v1,
          v2,
          curKey
        ); //todo wrong report
      }
      for (var i = 0; i < v1.length; ++i) {
        var r1 = isEqual(v1[i], v2[i], curKey);
        if (r1 !== true) {
          return r1;
        }
      }
      return true;
    }
    if (v1 instanceof Date || v2 instanceof Date) {
      if (!(v1 instanceof Date) || !(v2 instanceof Date)) {
        return new EqualFalseResult(
          "some is not Date: v1 != v2",
          v1,
          v2,
          curKey
        );
      } else {
        const r = v1.valueOf() === v2.valueOf();
        if (!r)
          return new EqualFalseResult(
            "different dates: v1 != v2",
            v1,
            v2,
            curKey
          );
        return true;
      }
    }
    var keys = Object.keys(v1);
    var keys2 = Object.keys(v2);
    if (opt.checkKeysLength) {
      if (keys.length != keys2.length) {
        return new EqualFalseResult(
          "different object-key-lengths: v1 != v2",
          v1,
          v2,
          curKey
        );
      }
    }

    function checkKeys(keys) {
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var r2 = isEqual(v1[key], v2[key], key);
        if (r2 !== true) {
          r2.key = curKey + "." + r2.key;
          return r2;
        }
      }
      return true;
    }

    const r = checkKeys(keys);
    if (r === true) return checkKeys(keys2);
    else return r;
  }

  var r = isEqual(v1, v2, "");

  if (r !== true && opt.showFalseReason !== false) {
    if (typeof opt.showFalseReason === "function") {
      opt.falseReason = opt.showFalseReason(r.msg, r.v1, r.v2, r.key);
    } else {
      var msg = r.toString();
      opt.falseReason = msg;
      console.log("Objects are not equal", msg);
      // console.log(r.v1, r.v2, r.key);
    }
  }

  return r === true;
};
