export default function equalDates(value) {
  if (isNaN(this) && isNaN(value)) return true;
  return (
    this.getFullYear() === value.getFullYear() &&
    this.getMonth() === value.getMonth() &&
    this.getDate() === value.getDate()
  );
}
