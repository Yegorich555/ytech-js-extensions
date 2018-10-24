/*!
  Copyright (c) 2018 Yegor Golubchik.
  Licensed under the MIT License (MIT), see
  https://github.com/Yegorich555/ytech-js-extensions
*/
/* global define */

(function() {
    'use strict';

    /**
     * Generate random int value
     * @param {Number} [min=0]
     * @param {Number} [max=32767]
     * @return {Number} result in int-type between min and max values
     * 
     */
    Math.randomInt = function(min, max) {
        if (!min) min = 0;
        if (!max) max = 32767;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Math.convert = {
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

    /**
     * Coordinate extensions
     */
    Math.coord = {
        /**
         * Calculate distance between coordinates
         * @param {Number} lat1 latitude of 1 coordinate
         * @param {Number} lng1 longitude of 1 coordinate
         * @param {Number} lat2 latitude of 2 coordinate
         * @param {Number} lng2 longitude of 2 coordinate
         * @return {Number} result in radians
         */
        distanceBetween: function(lat1, lng1, lat2, lng2) {
            var dLat = Math.convert.degToRad(lat2 - lat1);
            var dLon = Math.convert.degToRad(lng2 - lng1);
            lat1 = Math.convert.degToRad(lat1);
            lat2 = Math.convert.degToRad(lat2);

            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // 6371 Earth-radius in km
        },
        /**
         * Add kilometers to latitude
         * 
         * @param {Number} lat latitude value
         * @param {Number} km distance in kilometers
         * @return {Number} return new latitude with added distance
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
         * @param {Number} lng longitude value
         * @param {Number} lat latitude value (required for calculating of longitude)
         * @param {Number} km distance in kilometers
         */
        addToLng: function(lng, lat, km) {
            var k = km * 1 / 111.32;
            return lng + k / Math.cos(Math.convert.degToRad(lat + k))
        }
    }
}());