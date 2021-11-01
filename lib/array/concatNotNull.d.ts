/**
 * Combines arrays excluding empty-arrays and null
 *
 * @param {any[]} items Additional items to add to the end of array.
 * @return {[]} new array with added items
 */
export default function concatNotNull<T>(
  this: Array<T | null>,
  ...arrays: Array<T | null>
): Array<T>;
