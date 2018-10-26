/**
 * Compare dates by Date-values only (without Time)
 * @return {Boolean} return true if Date-values is the same (including isNaN == isNaN comparison)
 */
module.exports = function(v1, v2) {
    if (isNaN(v1) && isNaN(v2))
        return true;
    return v1.getFullYear() === v2.getFullYear() && v1.getMonth() === v2.getMonth() && v1.getDate() === v2.getDate();
};