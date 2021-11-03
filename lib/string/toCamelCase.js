module.exports = function toCamelCase() {
  "use strict";
  if (!this) {
    return;
  }

  const arr = this.split(" ");
  arr[0] = arr[0].toLowerCaseFirst();
  for (let i = 1; i < arr.length; ++i) {
    arr[i] = arr[i].toUpperCaseFirst();
  }

  return arr.join("");
};
