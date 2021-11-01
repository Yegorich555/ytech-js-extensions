/**
 * Delete item from array
 *
 * @param {any|Function} callbackOrValue function to execute on each value in the array for finding item
 * @return {any} item which was deleted
 */
export default function remove<T>(
  this: Array<T>,
  callbackOrValue?: ((item: T) => boolean) | T
): T;
