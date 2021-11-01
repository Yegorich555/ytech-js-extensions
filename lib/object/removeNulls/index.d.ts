import RemoveOptions from "./removeOptions";

/**
 * Remove null, undefined, ''(empty-string) properties (note: with options.removeNullsFromArrays==true arrays will be replaced)
 *
 * @param {(Array|String|Object)} obj
 * @param {RemoveOptions} [options=defaultOptions]
 * @return {*} the same object
 */
export default function removeNulls<T>(obj: T, options?: RemoveOptions): T;
