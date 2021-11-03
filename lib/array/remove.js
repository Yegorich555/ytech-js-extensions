module.exports = function remove(callbackOrValue) {
  "use strict";
  if (!this) {
    return;
  }

  let f;
  if (typeof callbackOrValue === "function") f = callbackOrValue;
  else
    f = function (v) {
      return v === callbackOrValue;
    };

  for (let i = 0; i < this.length; ++i) {
    if (f(this[i])) {
      const v = this[i];
      this.splice(i, 1);
      return v;
    }
  }
};
