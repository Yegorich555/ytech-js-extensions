interface Math {
  /**
   * Generate random int value
   *
   * @param {Number} [min=0]
   * @param {Number} [max=32767]
   * @return {Number} result in int-type between min and max values
   */
  randomInt: typeof import("./randomInt").default;
  /**
   * Object with convert functions
   */
  convert: typeof import("./convert").default;
  /**
   * Object with coord functions
   */
  coord: typeof import("./coord").default;
}
