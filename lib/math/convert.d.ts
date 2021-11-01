/**
 * Convert kilometers to miles
 *
 * @param {Number} km
 * @return {Number} result in miles
 */
export function kmToMiles(km: number): number;

/**
 * Convert miles to kilometers
 *
 * @param {Number} miles
 * @return {Number} result in kilometers
 */
export function milesToKm(miles: number): number;

/**
 * Convert degree to radians
 *
 * @param {Number} degree
 * @return {Number} result in radians
 */
export function degToRad(degree: number): number;

declare let Convert: {
  kmToMiles: typeof kmToMiles;
  milesToKm: typeof milesToKm;
  degToRad: typeof degToRad;
};

export default Convert;
