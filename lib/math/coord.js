const { degToRad } = require("./convert");

// prettier-ignore
module.exports.distanceBetween = function distanceBetween(lat1, lng1, lat2, lng2) {
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lng2 - lng1);
  lat1 = degToRad(lat1);
  lat2 = degToRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1) *
      Math.cos(lat2);
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // 6371 Earth-radius in km
};

module.exports.addToLat = function addToLat(lat, km) {
  //const kmInDegree = 1 / 111.32;
  //const coef = km * kmInDegree;
  //return lat + coef;
  return lat + (km * 1) / 111.32; //number of km per degree = ~111km (111.32 in google maps, but range varies between 110.567km at the equator and 111.699km at the poles)
};

module.exports.addToLng = function addToLng(lng, lat, km) {
  const k = (km * 1) / 111.32;
  return lng + k / Math.cos(degToRad(lat + k));
};
