module.exports = {
    /**
     * Convert kilometers to miles
     * 
     * @param {Number} km
     * @return {Number} result in miles
     */
    kmToMiles: function(km) {
        return km / 1.609344;
    },
    /**
     * Convert miles to kilometers
     * 
     * @param {Number} miles
     * @return {Number} result in kilometers
     */
    milesToKm: function(miles) {
        return miles * 1.609344;
    },
    /**
     * Convert degree to radians
     *
     * @param {Number} degree
     * @return {Number} result in radians
     */
    degToRad: function(degree) {
        return degree * Math.PI / 180;
    }
}