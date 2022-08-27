export default function getTime() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const miliSeconds = new Date().getMilliseconds();
  let time;

  return (time = { hour, minute, seconds, miliSeconds });
}
