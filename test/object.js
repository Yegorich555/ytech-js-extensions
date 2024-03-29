let assert = require("assert");
require("../index");

describe("Object", function () {
  let defined = (fn) => {
    it("defined", function () {
      assert.notEqual(undefined, fn);
    });
    return fn != null;
  };

  describe("#equal", function () {
    if (!defined(Object.equal)) return;
    let dt = new Date();
    let objs = Array(2);
    for (let i = 0; i < 3; ++i)
      objs[i] = {
        id: 1,
        lst: [
          {
            id: 100,
            str: "check",
            dateCreation: dt,
            calculate: function () {},
            nullValue: null,
            undValue: undefined,
          },
          {
            strv: "ch",
          },
        ],
        tag: {
          id: 5,
        },
      };

    let options = { showFalseReason: true };
    let result = Object.equal(objs[0], objs[1], options);

    function strictEqual(expected, v1, v2) {
      if (v1 === undefined) {
        v1 = objs[0];
        v2 = objs[1];
      }
      return assert.strictEqual(
        expected,
        Object.equal(v1, v2, options),
        `false reason: ${options.falseReason}`
      );
    }

    it("for full equal objects", function () {
      strictEqual(true, objs[0], objs[1]);
    });
    if (!result) return;

    it("for primitive values", function () {
      assert.strictEqual(true, Object.equal(5, 5));
    });
    it("different props", function () {
      assert.strictEqual(false, Object.equal({ id: 1 }, { id: 1, d: "s" }));
    });
    //it('options.onlyOwnProperties', function() {})
    it("options.ignoreEmptyArrays: false", function () {
      objs[1].emptyArr = [];
      options.ignoreEmptyArrays = false;
      strictEqual(false);
    });
    it("options.ignoreEmptyArrays: true", function () {
      objs[0].emptyArr = [];
      objs[1].emptyArr = null;
      options.ignoreEmptyArrays = true;
      strictEqual(true);
      objs[0].emptyArr = null;
      objs[1].emptyArr = [];
      strictEqual(true);
    });

    it("options.ignoreFunctions: false", function () {
      objs[0].testFunc = function () {};
      options.ignoreFunctions = false;
      strictEqual(false);
    });
    it("options.ignoreFunctions: true", function () {
      options.ignoreFunctions = true;
      strictEqual(true);
    });
    it("options.checkKeysLength: true", function () {
      options.checkKeysLength = true;
      strictEqual(false, {}, { v: null });
      strictEqual(true, { v: null }, { v: null });
    });
    it("options.checkKeysLength: false", function () {
      options.checkKeysLength = false;
      strictEqual(true, {}, { v: null });
    });
    it("different nested primitives", function () {
      objs[0].lst[1].id = 3;
      objs[1].lst[1].id = 31;
      strictEqual(false);
      objs[0].lst[1].id = 3;
      objs[1].lst[1].id = 3;
      strictEqual(true);
    });
    it("different types", function () {
      objs[0].ch = 3;
      objs[1].ch = [];
      strictEqual(false);
      objs[1].ch = 3;
      strictEqual(true);
    });
    it("different nested dates", function () {
      objs[0].lst[1].dt = new Date(2018, 1, 1);
      objs[1].lst[1].dt = new Date(2019, 1, 1);
      strictEqual(false);
      objs[1].lst[1].dt = new Date(2018, 1, 1);
      strictEqual(true);
    });
    it("null nested", function () {
      strictEqual(true, { id: null }, {});
    });
    it("only 1 is array", function () {
      strictEqual(false, { arr: [] }, { arr: {} });
    });
    it("different array length", function () {
      strictEqual(false, { arr: [1, 2] }, { arr: [1] });
    });
    it("only 1 is date", function () {
      strictEqual(false, { dt: new Date() }, { dt: {} });
    });

    it("options.showFalseReason is function", function () {
      let opt = {
        showFalseReason: function (msg, v1, v2, key) {
          console.log("checking function:" + msg, v1, v2, key);
          return msg;
        },
      };
      assert.strictEqual(
        false,
        Object.equal(1, 5, opt),
        `false reason: ${opt.falseReason}`
      );
    });
  });

  describe("#tryParseJSONDate", function () {
    if (!defined(Object.tryParseJSONDate)) return;
    let dt = new Date();
    let dtv = dt.valueOf();
    let dtStr = dt.toJSON();

    it("primitive string", function () {
      assert.strictEqual(dtv, Object.tryParseJSONDate(dtStr).valueOf());
    });
    it("array", function () {
      let r = Object.tryParseJSONDate([dt, dtStr, 1]);
      assert.strictEqual(
        true,
        r[0].valueOf() == dtv && r[1].valueOf() == dtv && r[2] == 1
      );
    });
    it("properties", function () {
      let v = { id: 1, dt, dt2: dtStr, str: "ds", arr: [{ id: 11 }, 2] };
      Object.tryParseJSONDate(v);
      let equal =
        v.id === 1 &&
        v.dt === dt &&
        v.dt2.valueOf() === dtv &&
        v.str === "ds" &&
        v.arr[0].id === 11 &&
        v.arr[1] == 2;
      assert.strictEqual(true, equal);
    });
    it("nested nulls", function () {
      let v = {
        id: 1,
        nullValue: null,
        nullValueNested: { idn: 2, nullNested: null },
      };
      Object.tryParseJSONDate(v);
      let equal =
        v.id === 1 &&
        v.nullValue === null &&
        v.nullValueNested &&
        v.nullValueNested.idn === 2;
      v.nullValueNested.nullNested === null;
      assert.strictEqual(true, equal);
    });
  });

  describe("#removeNulls", function () {
    if (!defined(Object.removeNulls)) return;
    it("options.trimStrings = true", function () {
      assert.strictEqual(
        "str",
        Object.removeNulls(" str  ", { trimStrings: true })
      );
    });
    it("options.trimStrings = false", function () {
      assert.strictEqual(
        " str ",
        Object.removeNulls(" str ", { trimStrings: false })
      );
    });
    it("options.removeEmptyStrings = false", function () {
      assert.strictEqual(
        "",
        Object.removeNulls("", { removeEmptyStrings: false })
      );
    });
    it("options.removeEmptyStrings = true", function () {
      assert.strictEqual(
        undefined,
        Object.removeNulls("", { removeEmptyStrings: true })
      );
    });
    it("options.disable array props", function () {
      let r = Object.removeNulls([1, null, "s"], {
        removeEmptyArrays: false,
        removeNullsFromArrays: false,
      });
      assert.strictEqual(true, r[0] === 1 && r[1] === null && r[2] === "s");
    });
    it("options.removeEmptyArrays=true", function () {
      let r = Object.removeNulls([], {
        removeEmptyArrays: true,
        removeNullsFromArrays: false,
      });
      assert.strictEqual(undefined, r);
    });
    it("options.removeNullsFromArrays=true", function () {
      let r = Object.removeNulls([1, null, "s"], {
        removeEmptyArrays: false,
        removeNullsFromArrays: true,
      });
      assert.strictEqual(true, r.length === 2 && r[0] === 1 && r[1] === "s");
    });
    it("full test for object with default options", function () {
      let r = Object.removeNulls({
        id: 1,
        arr: [1, null, 2],
        arr2: [null, undefined],
        arr3: [],
        s: " ",
        s2: " str ",
      });
      assert.strictEqual(
        true,
        r.id === 1 &&
          r.arr &&
          r.arr.length === 2 &&
          r.arr[0] === 1 &&
          r.arr[1] === 2 &&
          !r.hasOwnProperty("arr2") &&
          !r.hasOwnProperty("arr3") &&
          !r.hasOwnProperty("s") &&
          r.s2 === "str"
      );
    });
  });
});
