interface String {
  /**
   * Compare string with ignore case
   *
   * @param {String} v
   * @return {Boolean} true if equal
   */
  equal: typeof import("./equal").default;
  /**
   * Set UpperCase for the first character
   *
   * @return {String} new string if string is not null otherwise same string
   */
  toUpperCaseFirst: typeof import("./toUpperCaseFirst").default;
  /**
   * Set LowerCase for the first character
   *
   * @return {String} new string if string is not null otherwise same string
   */
  toLowerCaseFirst: typeof import("./toLowerCaseFirst").default;
  /**
   * Split string by spaces and join to camelCase: 'My camel Case string' to 'myCamelCaseString'
   */
  toCamelCase: typeof import("./toCamelCase").default;
  /**
   * Transform string from camelCase: 'myCamelCaseString' to 'My Camel Case String'
   */
  fromCamelCase: typeof import("./fromCamelCase").default;
}
