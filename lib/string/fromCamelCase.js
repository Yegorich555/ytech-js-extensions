/**
 * Transform string from camelCase: 'myCamelCaseString' to 'My Camel Case String'
 */
module.exports = function() {
    return this && this.replace(/([a-z](?=[A-Z]))/g, '$1 ').toUpperCaseFirst();
}