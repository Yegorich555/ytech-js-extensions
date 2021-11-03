module.exports.kmToMiles = function kmToMiles(km) {
  return km / 1.609344;
};

module.exports.milesToKm = function milesToKm(miles) {
  return miles * 1.609344;
};

module.exports.degToRad = function degToRad(degree) {
  return (degree * Math.PI) / 180;
};
