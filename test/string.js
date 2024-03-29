let assert = require("assert");
require("../index");

describe("String", function () {
  let defined = (fn) => {
    it("defined", function () {
      assert.notEqual(undefined, fn);
    });
    return fn != null;
  };

  describe("#equal", function () {
    if (!defined("".equal)) return;
    it("for the same", function () {
      assert.strictEqual(true, "s b".equal("s b"));
    });
    it("for empty or null", function () {
      assert.strictEqual(true, "".equal(null));
    });
    it("for different case", function () {
      assert.strictEqual(true, "S b".equal("s B"));
    });
    it("false if only 1 is null", function () {
      assert.strictEqual(false, "s".equal(null));
    });
  });

  describe("#toUpperCaseFirst", function () {
    if (!defined("".toUpperCaseFirst)) return;
    it("check", function () {
      assert.strictEqual("Sb", "sb".toUpperCaseFirst());
    });
  });

  describe("#toLowerCaseFirst", function () {
    if (!defined("".toLowerCaseFirst)) return;
    it("check", function () {
      assert.strictEqual("sB", "SB".toLowerCaseFirst());
    });
  });

  describe("#toCamelCase", function () {
    if (!defined("".toCamelCase)) return;
    it("check", function () {
      assert.strictEqual(
        "myCamelCaseString",
        "My camel Case String".toCamelCase()
      );
    });
    it("check if !this", function () {
      assert.strictEqual(undefined, String.prototype.toCamelCase.call());
    });
  });

  describe("#fromCamelCase", function () {
    if (!defined("".fromCamelCase)) return;
    it("check", function () {
      assert.strictEqual(
        "My Camel Case String",
        "myCamelCaseString".fromCamelCase()
      );
    });
  });
});
