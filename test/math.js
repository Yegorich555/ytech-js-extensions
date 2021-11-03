let assert = require("assert");
require("../index");

describe("Math", function () {
  let defined = (fn) => {
    it("defined", function () {
      assert.notEqual(undefined, fn);
    });
    return fn != null;
  };

  describe("#randomInt", function () {
    if (!defined(Math.randomInt)) return;
    it("get with defaults", function () {
      let v = Math.randomInt();
      assert.strictEqual(true, v >= 0 && v <= 32767);
    });
    it("get between", function () {
      let v = Math.randomInt(123, 768);
      assert.strictEqual(true, v >= 123 && v <= 768);
    });
  });

  describe("#Math.convert", function () {
    if (!defined(Math.convert)) return;
    describe("#kmToMiles", function () {
      if (!defined(Math.convert.kmToMiles)) return;
      it("calculate", function () {
        assert.strictEqual(10, Math.convert.kmToMiles(16.09344));
      });
    });
    describe("#milesToKm", function () {
      if (!defined(Math.convert.milesToKm)) return;
      it("calculate", function () {
        assert.strictEqual(16.09344, Math.convert.milesToKm(10));
      });
    });
    describe("#degToRad", function () {
      if (!defined(Math.convert.degToRad)) return;
      it("calculate", function () {
        assert.strictEqual(Math.PI, Math.convert.degToRad(180));
      });
    });
  });

  describe("#Math.coord", function () {
    if (!defined(Math.coord)) return;
    describe("#Math.coord.distanceBetween", function () {
      if (!defined(Math.coord.distanceBetween)) return;
      it("0 for the same", function () {
        assert.strictEqual(
          0,
          Math.coord.distanceBetween(53.8, 27.5, 53.8, 27.5)
        );
      });
      it("calculate", function () {
        assert.strictEqual(
          128.7393221627752,
          Math.coord.distanceBetween(53.8, 27.5, 54.8, 28.5)
        );
      });
    });
    describe("#Math.coord.addToLat", function () {
      if (!defined(Math.coord.addToLat)) return;
      it("calculate", function () {
        assert.strictEqual(53.90779734099892, Math.coord.addToLat(53.8, 12));
      });
    });
    describe("#Math.coord.addToLng", function () {
      if (!defined(Math.coord.addToLng)) return;
      it("calculate", function () {
        assert.strictEqual(
          27.682990716224253,
          Math.coord.addToLng(27.5, 53.8, 12)
        );
      });
    });
  });
});
