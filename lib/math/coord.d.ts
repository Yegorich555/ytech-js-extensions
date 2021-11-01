/**
 * Calculate distance between coordinates
 * @param {Number} lat1 latitude of 1 coordinate
 * @param {Number} lng1 longitude of 1 coordinate
 * @param {Number} lat2 latitude of 2 coordinate
 * @param {Number} lng2 longitude of 2 coordinate
 * @return {Number} result in kilometers
 */
export function distanceBetween(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number;
/**
 * Add kilometers to latitude
 *
 * @param {Number} lat latitude value
 * @param {Number} km distance in kilometers
 * @return {Number} return new latitude with added distance
 */
export function addToLat(lat: number, km: number): number;
/**
 *  Add kilometers to longitude
 *
 * @param {Number} lng longitude value
 * @param {Number} lat latitude value (required for calculating of longitude)
 * @param {Number} km distance in kilometers
 */
export function addToLng(lng: number, lat: number, km: number): number;

declare let Coord: {
  distanceBetween: typeof distanceBetween;
  addToLat: typeof addToLat;
  addToLng: typeof addToLng;
};

export default Coord;
