module.exports = function addIfNotExists(newItem, propNameOrGetter) {
  "use strict";
  if (!this) {
    return;
  }

  let getVal;
  if (propNameOrGetter == null)
    getVal = function (v) {
      return v;
    };
  else if (typeof propNameOrGetter === "string")
    getVal = function (v) {
      return v[propNameOrGetter];
    };
  else if (typeof propNameOrGetter === "function") {
    getVal = propNameOrGetter;
  } else
    throw new TypeError(
      "propNameOrGetter must be undefined, a function or string"
    );

  const item = this.find(function (item) {
    return getVal(item) === getVal(newItem);
  });
  if (item === undefined) {
    this.push(newItem);
    return newItem;
  }
  return item;
};
