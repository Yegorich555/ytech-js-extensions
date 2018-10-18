var assert = require('assert');
require('../index');

describe('Array', function() {
    describe('#last()', function() {
        it('defined', function() { assert.notEqual(undefined, [].last); });
        if (![].last) return;
        it('return last', function() { assert.equal(3, [1, 2, 3].last()); });
        it('return null if empty', function() { assert.equal(null, [].last()); });

    });
    describe('#includes', function() {
        it('defined', function() { assert.notEqual(undefined, [].includes); });
        if (![].includes) return;
        it('return true', function() { assert.equal(true, [1, 2, 3].includes(1)); });
        it('return false', function() { assert.equal(false, [1, 2, 3].includes(12)); });
        it('return false if empty', function() { assert.equal(false, [].includes(1)); });
    });
    describe('#find', function() {
        it('defined', function() { assert.notEqual(undefined, [].find); });
        if (![].find) return;
        it('return found', function() { assert.equal(2, [1, 2, 3].find(v => v === 2)); });
        it('return null', function() { assert.equal(null, [1, 2, 3].find(v => v === 4)); });
    });
    describe('#addIfNotExists', function() {
        it('defined', function() { assert.notEqual(undefined, [].addIfNotExists); });
        if (![].addIfNotExists) return;
        it('add for int-type', function() {
            var arr = [1, 2];
            var v = arr.addIfNotExists(3);
            assert.equal(2, v === 3 && arr.length === 3 && arr.indexOf(3));
        });
        it('exists for int-type', function() {
            var arr = [1, 2, 3];
            var v = arr.addIfNotExists(2);
            assert.equal(1, v === 2 && arr.length === 3 && arr.indexOf(2));
        });
        it('add for empty-array', function() {
            var arr = [];
            var v = arr.addIfNotExists(2);
            assert.equal(0, v === 2 && arr.length === 1 && arr.indexOf(2));
        });
        it('add for object by stringProp', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var newItem = { id: 3 };
            var v = arr.addIfNotExists(newItem, 'id');
            assert.equal(2, v === newItem && arr.length === 3 && arr.indexOf(newItem));
        });
        it('exists for object by stringProp', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var existsItem = arr[1];
            var v = arr.addIfNotExists(Object.assign({}, existsItem), 'id');
            assert.equal(1, v === existsItem && arr.length === 2 && arr.indexOf(existsItem));
        });
        it('add for object by callBackToPropFunc', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var newItem = { id: 3 };
            var v = arr.addIfNotExists(newItem, v => v.id);
            assert.equal(2, v === newItem && arr.length === 3 && arr.indexOf(newItem));
        });
        it('exists for object by callBackToPropFunc', function() {
            var arr = [{ id: 1 }, { id: 2 }];
            var existsItem = arr[1];
            var v = arr.addIfNotExists(Object.assign({}, existsItem), v => v.id);
            assert.equal(1, v === existsItem && arr.length === 2 && arr.indexOf(existsItem));
        });
    });
});