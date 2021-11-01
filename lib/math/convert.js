export function kmToMiles(km) {
  return km / 1.609344;
}

export function milesToKm(miles) {
  return miles * 1.609344;
}

export function degToRad(degree) {
  return (degree * Math.PI) / 180;
}

const convert = {
  kmToMiles,
  milesToKm,
  degToRad,
};

export default convert;
