export default function addDays(value) {
  this.setDate(this.getDate() + value);
  return this;
}
