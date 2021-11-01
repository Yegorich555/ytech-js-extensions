interface ObjectConstructor {
  /**
   * Compare two objects if they are equal (including nested properties)
   *
   * @param {*} v1
   * @param {*} v2
   * @param {EqualOptions} [options=defaultOptions]
   * @return {Boolean} true if equal
   */
  equal: typeof import("./equal").default;
  /**
   * Replace date-JSON-string properties to date
   *
   * @param {*} obj
   * @return {*} the same object
   */
  tryParseJSONDate: typeof import("./tryParseJSONDate").default;
  /**
   * Remove null, undefined, ''(empty-string) properties (note: with options.removeNullsFromArrays==true arrays will be replaced)
   *
   * @param {(Array|String|Object)} obj
   * @param {RemoveOptions} [options=defaultOptions]
   * @return {*} the same object
   */
  removeNulls: typeof import("./removeNulls/index").default;
}
