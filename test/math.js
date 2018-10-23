var assert = require('assert');
require('../index');

describe('Math', function() {
    var defined = fn => {
        it('defined', function() { assert.notEqual(undefined, fn); });
        return fn != null;
    }

    describe('#randomInt', function() {
        if (!defined(Math.randomInt))
            return;
        it('get with defaults', function() {
            var v = Math.randomInt();
            assert.strictEqual(true, v >= 0 && v <= 32767);
        });
        it('get between', function() {
            var v = Math.randomInt(123, 768);
            assert.strictEqual(true, v >= 123 && v <= 768);
        });
    });

    describe('#Math.convert', function() {
        if (!defined(Math.convert))
            return;
        describe('#kmToMiles', function() {
            if (!defined(Math.convert.kmToMiles))
                return;
            it('calculate', function() { assert.strictEqual(10, Math.convert.kmToMiles(16.09344)); });
        });
        describe('#milesToKm', function() {
            if (!defined(Math.convert.milesToKm))
                return;
            it('calculate', function() { assert.strictEqual(16.09344, Math.convert.milesToKm(10)); });
        });
        describe('#degToRad', function() {
            if (!defined(Math.convert.degToRad))
                return;
            it('calculate', function() { assert.strictEqual(Math.PI, Math.convert.degToRad(180)); });
        });
    });

    describe('#Math.coord', function() {
        if (!defined(Math.coord))
            return;
        describe('#Math.coord.addToLat', function() {
            if (!defined(Math.coord.addToLat))
                return;
            it('calculate', function() { assert.strictEqual(53.90779734099892, Math.coord.addToLat(53.8, 12)); });
        });
        describe('#Math.coord.addToLng', function() {
            if (!defined(Math.coord.addToLng))
                return;
            it('calculate', function() { assert.strictEqual(27.682990716224253, Math.coord.addToLng(27.5, 53.8, 12)); });
        });
    });
});