/**
 * Compare by values
 * @return {Boolean} return true if dates is equal (including isNaN == isNaN comparison)
 */
module.exports = function(value) {
    if (isNaN(this) && isNaN(value))
        return true;
    return this.valueOf() === value.valueOf();
};