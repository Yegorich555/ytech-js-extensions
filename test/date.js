let assert = require("assert");
require("../index");

describe("Date", function () {
  let defined = (fn) => {
    it("defined", function () {
      assert.notEqual(undefined, fn);
    });
    return fn != null;
  };
  let dt1 = new Date(Date.parse("2018-10-22"));
  let dtNaN1 = new Date(55555555555555555);

  function returnTheSame(msg, v) {
    it(msg.replace("{v}", `"${v}"`) + ": return inputValue", function () {
      assert.strictEqual(v, Date.tryParseJSON(v));
    });
  }

  describe("#tryParseJSON", function () {
    if (!defined(Date.tryParseJSON)) return;
    it("return date type", function () {
      assert.strictEqual(true, Date.tryParseJSON(dt1.toJSON()) instanceof Date);
    });
    it("same date", function () {
      assert.strictEqual(
        dt1.valueOf(),
        Date.tryParseJSON(dt1.toJSON()).valueOf()
      );
    });
    returnTheSame("bad string date regex {v}", "2018-dd-12T00:00:00");
    returnTheSame("bad string date but good regex {v}", "2018-69-70T00:00:00");
    returnTheSame("not full date {v}", "2018-12-01");
    returnTheSame("not string {v}", 5);
    returnTheSame("string length > 27 {v}", "012345678901234567890123456789");

    let testStr = "2018-12-01T00:00:00kkk";
    it(`bad end of string"${testStr}": return date`, function () {
      assert.strictEqual(testStr, Date.tryParseJSON(testStr));
    });
  });

  describe("#compareByDate", function () {
    if (!defined(Date.compareByDate)) return;

    it("equal for same values", function () {
      assert.strictEqual(
        true,
        Date.compareByDate(dt1, new Date(dt1.valueOf())) === 0
      );
    });
    it("equal for different time", function () {
      assert.strictEqual(
        true,
        Date.compareByDate(dt1, new Date(new Date(dt1).setHours(2))) === 0
      );
    });
    it("not equal(+1) for different date values", function () {
      assert.strictEqual(
        true,
        Date.compareByDate(dt1, new Date(new Date(dt1).setFullYear(1997))) === 1
      );
    });
    it("not equal(-1) for different date values", function () {
      assert.strictEqual(
        true,
        Date.compareByDate(new Date(new Date(dt1).setFullYear(1997)), dt1) ===
          -1
      );
    });
  });

  describe("#equal", function () {
    if (!defined(dt1.equal)) return;

    it("equal for same values", function () {
      assert.strictEqual(true, dt1.equal(new Date(dt1.valueOf())));
    });
    it("equal for NaN values", function () {
      assert.strictEqual(true, dtNaN1.equal(new Date(dtNaN1.valueOf())));
    });
    it("not equal for different", function () {
      assert.notStrictEqual(true, dt1.equal(new Date(dt1.valueOf() + 1)));
    });
  });

  describe("#equalDates", function () {
    if (!defined(dt1.equalDates)) return;
    it("equal for same values but different in time", function () {
      assert.strictEqual(true, dt1.equalDates(new Date(dt1.setHours(1))));
    });
    it("equal for NaN values", function () {
      assert.strictEqual(true, dtNaN1.equalDates(new Date(dtNaN1.valueOf())));
    });
    it("not equal for different months", function () {
      assert.notStrictEqual(
        true,
        dt1.equalDates(new Date(new Date(dt1.valueOf()).setMonth(42)))
      );
    });
  });

  function checkAdd(funcName) {
    describe(`#${funcName}`, function () {
      if (!defined(dt1[funcName])) return;

      it("return date type", function () {
        assert.strictEqual(true, dt1[funcName](42) instanceof Date);
      });
      it("equal reverted", function () {
        assert.strictEqual(
          dt1.valueOf(),
          dt1[funcName](42)[funcName](-42).valueOf()
        );
      });
    });
  }
  checkAdd("addDays");
  checkAdd("addMonths");
  checkAdd("addYears");

  function checkReset(funcName, newDateFnc) {
    describe(`#${funcName}`, function () {
      if (!defined(dt1[funcName])) return;

      it("return date type", function () {
        assert.strictEqual(true, new Date()[funcName]() instanceof Date);
      });
      it("reseted time", function () {
        let dt = newDateFnc(2018, 1, 1, 1, 1, 1, 689)[funcName]();
        assert.strictEqual(
          newDateFnc(2018, 1, 1, 0, 0, 0, 0).valueOf(),
          dt.valueOf()
        );
      });
    });
  }

  checkReset(
    "resetTime",
    (y, m, d, h, mm, s, ms) => new Date(y, m, d, h, mm, s, ms)
  );
  checkReset(
    "resetUTCTime",
    (y, m, d, h, mm, s, ms) => new Date(Date.UTC(y, m, d, h, mm, s, ms))
  );

  describe("#UTCFromValues", function () {
    if (!defined(Date.UTCFromValues)) return;
    it("return date type", function () {
      assert.strictEqual(true, Date.UTCFromValues(2017, 1, 1) instanceof Date);
    });
    it("equal for same naitve-date", function () {
      assert.strictEqual(
        Date.UTC(2017, 1, 1),
        Date.UTCFromValues(2017, 1, 1).valueOf()
      );
    });
  });

  describe("#UTCFromDate", function () {
    if (!defined(Date.UTCFromDate)) return;
    it("return date type", function () {
      assert.strictEqual(true, Date.UTCFromDate(dt1) instanceof Date);
    });
    it("return isNaN if input isNaN", function () {
      assert.strictEqual(true, isNaN(Date.UTCFromDate(dtNaN1)));
    });
    it("equal for the same UTCdate", function () {
      assert.strictEqual(
        Date.UTC(2017, 1, 1),
        Date.UTCFromDate(new Date(2017, 1, 1)).valueOf()
      );
    });
  });
});
