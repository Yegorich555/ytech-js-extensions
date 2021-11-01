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
export default function addIfNotExists<T>(
  this: Array<T>,
  newItem: T,
  propNameOrGetter?: ((array: Array<T>) => T) | null | keyof T
): T;
