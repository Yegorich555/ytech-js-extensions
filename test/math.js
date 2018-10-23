var assert = require('assert');
require('../index');

describe('Math', function() {
    var defined = fn => {
        it('defined', function() { assert.notEqual(undefined, fn); });
        return fn != null;
    }

    describe('#degToRad', function() {
        if (!defined(Math.degToRad))
            return;
        it('calculate', function() { assert.strictEqual(Math.PI, Math.degToRad(180)); });
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