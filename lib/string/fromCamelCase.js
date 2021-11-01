export default function fromCamelCase() {
  return this && this.replace(/([a-z](?=[A-Z]))/g, "$1 ").toUpperCaseFirst();
}
