export default function toLowerCaseFirst() {
  return this && this.charAt(0).toLowerCase() + this.slice(1);
}
