var assert = require('assert');
Array.prototype.includes = null;
Array.prototype.find = null;
Array.prototype.filter = null;
require('../index');

describe('Array', function() {
    describe('#last()', function() {
        it('defined', function() { assert.notStrictEqual(undefined, [].last); });
        if (![].last) return;
        it('return last', function() { assert.strictEqual(3, [1, 2, 3].last()); });
        it('return undefined if empty', function() { assert.strictEqual(undefined, [].last()); });

    });
    describe('#addIfNotExists', function() {
        it('defined', function() { assert.notStrictEqual(undefined, [].addIfNotExists); });
        if (![].addIfNotExists) return;
        it('undefined for null', function() { assert.strictEqual(undefined, Array.prototype.addIfNotExists.call()) })
        it('exception for invalid propName type', function() { assert.throws(_ => [].addIfNotExists(null, 1), TypeError) })
        it('add for int-type', function() {
            var arr = [1, 2];
            var v = arr.addIfNotExists(3);
            assert.strictEqual(2, v === 3 && arr.length === 3 && arr.indexOf(3));
        });
        it('exists for int-type', function() {
            var arr = [1, 2, 3];
            var v = arr.addIfNotExists(2);
            assert.strictEqual(1, v === 2 && arr.length === 3 && arr.indexOf(2));
        });
        it('add for empty-array', function() {
            var arr = [];
            var v = arr.addIfNotExists(2);
            assert.strictEqual(0, v === 2 && arr.length === 1 && arr.indexOf(2));
        });
        it('add for object by stringProp', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var newItem = { id: 3 };
            var v = arr.addIfNotExists(newItem, 'id');
            assert.strictEqual(2, v === newItem && arr.length === 3 && arr.indexOf(newItem));
        });
        it('exists for object by stringProp', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var existsItem = arr[1];
            var v = arr.addIfNotExists(Object.assign({}, existsItem), 'id');
            assert.strictEqual(1, v === existsItem && arr.length === 2 && arr.indexOf(existsItem));
        });
        it('add for object by callBackToPropFunc', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var newItem = { id: 3 };
            var v = arr.addIfNotExists(newItem, v => v.id);
            assert.strictEqual(2, v === newItem && arr.length === 3 && arr.indexOf(newItem));
        });
        it('exists for object by callBackToPropFunc', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var existsItem = arr[1];
            var v = arr.addIfNotExists(Object.assign({}, existsItem), v => v.id);
            assert.strictEqual(1, v === existsItem && arr.length === 2 && arr.indexOf(existsItem));
        });
    });
    describe('#remove', function() {
        it('defined', function() { assert.notStrictEqual(undefined, [].remove); });
        if (![].remove) return;
        it('undefined for null', function() { assert.strictEqual(undefined, Array.prototype.remove.call()) })
        it('remove for int-type', function() {
            var arr = [1, 2, 3];
            var v = arr.remove(2);
            assert.strictEqual(true, v === 2 && arr.length === 2 && arr.indexOf(2) === -1);
        });
        it('not remove if was not found', function() {
            var arr = [1, 2, 3];
            var v = arr.remove(4);
            assert.strictEqual(true, v === undefined && arr.length === 3);
        });
        it('remove for object-type by callback', function() {
            var arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
            var v = arr.remove(v1 => v1.id === 2);
            assert.strictEqual(true, v && v.id === 2 && arr.length === 2);
        });
        it('remove for object-type by equal directly', function() {
            var obj = { id: 2 };
            var arr = [{ id: 1 }, obj, { id: 3 }];
            var v = arr.remove(obj);
            assert.strictEqual(true, v && v.id === 2 && arr.length === 2 && arr[1].id !== 2);
        });
        it('not remove for object-type if was not found', function() {
            var arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
            var v = arr.remove(v1 => v1.id === 4);
            assert.strictEqual(undefined, v);
        });
    });
    describe('#concatNotNull', function() {
        it('defined', function() { assert.notStrictEqual(undefined, Array.concatNotNull); });
        if (!Array.concatNotNull) return;
        it('full-test', function() {
            var arr1 = [1, 2];
            var arr2 = null;
            var arr3 = [3, 4];
            var arr4 = [];
            var arr = Array.concatNotNull(arr1, arr2, arr3, arr4)
            assert.strictEqual(true, arr && arr.length === 4 && arr[0] === 1 && arr[1] === 2 && arr[2] === 3 && arr[3] === 4);
        });
    });

});