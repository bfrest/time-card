export default function getCurrentDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();
  let data;

  return (data = { month, day, year });
}
