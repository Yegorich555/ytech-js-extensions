var assert = require('assert');
require('../index');

describe('Object', function() {
    var defined = fn => {
        it('defined', function() { assert.notEqual(undefined, fn); });
        return fn != null;
    }

    describe('#equal', function() {
        if (!defined(Object.equal))
            return;
        var dt = new Date()
        var objs = Array(2);
        for (var i = 0; i < 3; ++i)
            objs[i] = {
                id: 1,
                lst: [{
                        id: 100,
                        str: "check",
                        dateCreation: dt,
                        calculate: function() {},
                        nullValue: null,
                        undValue: undefined
                    },
                    {
                        strv: "ch",
                    }
                ],
                tag: {
                    id: 5,
                }
            }



        var options = { falseReason: true }
        var result = Object.equal(objs[0], objs[1], options)

        function strictEqual(expected, resultValue) {
            assert.strictEqual(expected, resultValue || Object.equal(objs[0], objs[1], options), `false reason: ${options.falseReason}`);
        }

        it('for full equal objects', function() {
            strictEqual(true, result);
        });
        if (!result)
            return;
        it('- without options', function() { assert.strictEqual(true, Object.equal(objs[0], objs[1])); })
            //it('options.onlyOwnProperties', function() {})
        it('options.ignoreEmptyArrays: false', function() {
            objs[0].emptyArr = [];
            options.ignoreEmptyArrays = false;
            strictEqual(false);
        })
        it('options.ignoreEmptyArrays: true', function() {
            options.ignoreEmptyArrays = true;
            strictEqual(true);
        })

        it('options.ignoreFunctions: false', function() {
            objs[0].testFunc = function() {};
            options.ignoreFunctions = false;
            strictEqual(false);
        })
        it('options.ignoreFunctions: true', function() {
            options.ignoreFunctions = true;
            strictEqual(true);
        })
        it('options.checkKeysLength: true', function() {
            options.checkKeysLength = true;
            strictEqual(false);
        })
        it('options.checkKeysLength: false', function() {
            options.checkKeysLength = false;
            strictEqual(true);
        })
        it('different nested primitives', function() {
            objs[0].lst[1].id = 3;
            objs[1].lst[1].id = 31;
            strictEqual(false);
            objs[0].lst[1].id = 3;
            objs[1].lst[1].id = 3;
            strictEqual(true);
        })
        it('different types', function() {
            objs[0].ch = 3;
            objs[1].ch = [];
            strictEqual(false);
            objs[1].ch = 3;
            strictEqual(true);
        })
        it('different nested dates', function() {
            objs[0].lst[1].dt = new Date(2018, 1, 1);
            objs[1].lst[1].dt = new Date(2019, 1, 1);
            strictEqual(false);
            objs[1].lst[1].dt = new Date(2018, 1, 1);
            strictEqual(true);
        })
    });

});