export {};

declare global {
  interface Array<T> {
    /**
     * Add item if it doesn't exist in array
     *
     * @param {any} newItem The value which must find (newItem can be == null)
     * @param {(String|Function)} [propNameOrGetter=null]
     * null for primitive-types or objects which need to compare directly
     * string for object.propName which need to use for comparing
     * callback which need to use for comparing: v => v.id == newItem.id - for example
     * @return {any} item which found or item which added
     */
    addIfNotExists: typeof import("./addIfNotExists").default;
    /**
     * Return latest item from array
     *
     * @return {any} a last value
     */
    last: typeof import("./last").default;
    /**
     * Delete item from array
     *
     * @param {any|Function} callbackOrValue function to execute on each value in the array for finding item
     * @return {any} item which was deleted
     */
    remove: typeof import("./remove").default;
  }

  interface ArrayConstructor {
    /**
     * Combines arrays excluding empty-arrays and null
     *
     * @param {any[]} items Additional items to add to the end of array.
     * @return {[]} new array with added items
     */
    concatNotNull: typeof import("./concatNotNull").default;
  }
}
