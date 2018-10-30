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



        var options = { showFalseReason: true }
        var result = Object.equal(objs[0], objs[1], options)

        function strictEqual(expected, v1, v2) {
            if (v1 === undefined) {
                v1 = objs[0];
                v2 = objs[1];
            }
            return assert.strictEqual(expected, Object.equal(v1, v2, options), `false reason: ${options.falseReason}`);
        }

        it('for full equal objects', function() {
            strictEqual(true, objs[0], objs[1]);
        });
        if (!result)
            return;

        it('for primitive values', function() { assert.strictEqual(true, Object.equal(5, 5)) })
        it('different props', function() { assert.strictEqual(false, Object.equal({ id: 1 }, { id: 1, d: 's' })); })
            //it('options.onlyOwnProperties', function() {})
        it('options.ignoreEmptyArrays: false', function() {
            objs[1].emptyArr = [];
            options.ignoreEmptyArrays = false;
            strictEqual(false);
        })
        it('options.ignoreEmptyArrays: true', function() {
            objs[0].emptyArr = [];
            objs[1].emptyArr = null;
            options.ignoreEmptyArrays = true;
            strictEqual(true);
            objs[0].emptyArr = null;
            objs[1].emptyArr = [];
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
            strictEqual(false, {}, { v: null });
            strictEqual(true, { v: null }, { v: null });
        })
        it('options.checkKeysLength: false', function() {
            options.checkKeysLength = false;
            strictEqual(true, {}, { v: null });
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
        it('null nested', function() { strictEqual(true, { id: null }, {}); })
        it('only 1 is array', function() { strictEqual(false, { arr: [] }, { arr: {} }); })
        it('different array length', function() { strictEqual(false, { arr: [1, 2] }, { arr: [1] }); })
        it('only 1 is date', function() { strictEqual(false, { dt: new Date() }, { dt: {} }); })

        it('options.showFalseReason is function', function() {
            var opt = {
                showFalseReason: function(msg, v1, v2, key) {
                    console.log('checking function:' + msg, v1, v2, key)
                    return msg;
                }
            }
            assert.strictEqual(false, Object.equal(1, 5, opt), `false reason: ${opt.falseReason}`);
        })
    });

});