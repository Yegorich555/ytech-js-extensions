import EqualOptions from "./equalOptions";

/**
 * Compare two objects if they are equal (including nested properties)
 *
 * @param {*} v1
 * @param {*} v2
 * @param {EqualOptions} [options=defaultOptions]
 * @return {Boolean} true if equal
 */
export default function equal<T>(v1: T, v2: T, options?: EqualOptions): boolean;
