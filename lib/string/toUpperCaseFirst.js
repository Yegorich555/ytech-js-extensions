    /**
     * Set UpperCase for the first character
     * 
     * @return {String} new string if string is not null otherwise same string
     */
    module.exports = function() {
        return this && this.charAt(0).toUpperCase() + this.slice(1);
    }