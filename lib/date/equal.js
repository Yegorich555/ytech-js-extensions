export default function equal(value) {
  if (isNaN(this) && isNaN(value)) {
    return true;
  }
  return this.valueOf() === value.valueOf();
}
