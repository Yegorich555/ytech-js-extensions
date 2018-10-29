/**
 * Compare dates by Date-values only (without Time)
 * @return {Boolean} return true if Date-values is the same (including isNaN == isNaN comparison)
 */
module.exports = function(value) {
    if (isNaN(this) && isNaN(value))
        return true;
    return this.getFullYear() === value.getFullYear() && this.getMonth() === value.getMonth() && this.getDate() === value.getDate();
};