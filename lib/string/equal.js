export default function equal(v) {
  "use strict";
  if (!this && !v) return true;
  if (!this || !v) return false;

  return this.toUpperCase() == v.toUpperCase();
}
