/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    /**
     * Convert degree to radians
     *
     * @param {number} degree
     * @return {number} result in radians
     */
    Math.degToRad = function(degree) {
        return degree * Math.PI / 180;
    }

    /**
     * Coordinate extensions
     */
    Math.coord = {
        /**
         * Calculate distance between coordinates
         * @param {number} lat1 latitude of 1 coordinate
         * @param {number} lng1 longitude of 1 coordinate
         * @param {number} lat2 latitude of 2 coordinate
         * @param {number} lng2 longitude of 2 coordinate
         * @return {number} result in radians
         */
        distanceBetween: function(lat1, lng1, lat2, lng2) {
            var dLat = Math.degToRad(lat2 - lat1);
            var dLon = Math.degToRad(lng2 - lng1);
            lat1 = Math.degToRad(lat1);
            lat2 = Math.degToRad(lat2);

            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // 6371 Earth-radius in km
        },
        /**
         * Add kilometers to latitude
         * 
         * @param {number} lat latitude value
         * @param {number} km distance in kilometers
         * @return {number} return new latitude with added distance
         */
        addToLat: function(lat, km) {
            //let kmInDegree = 1 / 111.32;
            //let coef = km * kmInDegree;
            //return lat + coef;
            return lat + km * 1 / 111.32; //number of km per degree = ~111km (111.32 in google maps, but range varies between 110.567km at the equator and 111.699km at the poles)
        },
        /**
         *  Add kilometers to longitude
         * 
         * @param {number} lng longitude value
         * @param {number} lat latitude value (required for calculating of longitude)
         * @param {number} km distance in kilometers
         */
        addToLng: function(lng, lat, km) {
            var k = km * 1 / 111.32;
            return lng + k / Math.cos(Math.degToRad(lat + k))
        }
    }
}());