Object.equal = require('./equal/index.js');
Object.tryParseJSONDate = require('./tryParseJSONDate.js');
Object.removeNulls = require('./removeNulls/index.js');

module.exports = {
    equalOptions: require('./equal/equalOptions.js'),
    removeOptions: require('./removeNulls/removeOptions.js')
}