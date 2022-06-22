export default function getHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return { hours, minutesLeft };
}
