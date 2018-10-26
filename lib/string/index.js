(function() {
    'use strict'
    String.prototype.equal = require('./equal')
    String.prototype.toUpperCaseFirst = require('./toUpperCaseFirst')
    String.prototype.toLowerCaseFirst = require('./toLowerCaseFirst')
    String.prototype.toCamelCase = require('./toCamelCase')
    String.prototype.fromCamelCase = require('./fromCamelCase')
}())