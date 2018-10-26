/**
 * Compare by values
 * @return {Boolean} return true if dates is equal (including isNaN == isNaN comparison)
 */
module.exports = function(v1, v2) {
    if (isNaN(v1) && isNaN(v2))
        return true;
    return v1.valueOf() === v2.valueOf();
};