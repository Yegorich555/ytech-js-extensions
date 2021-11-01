export default function toCamelCase() {
  "use strict";
  if (!this) {
    return;
  }

  var arr = this.split(" ");
  arr[0] = arr[0].toLowerCaseFirst();
  for (var i = 1; i < arr.length; ++i) {
    arr[i] = arr[i].toUpperCaseFirst();
  }

  return arr.join("");
}
