export default function getHoursAndMinutes(minutes) {
  // Si la api no contiene la duración de la película o serie se devuelve un mensaje
  if (minutes === 0) {
    return 'Información no disponible';
  }

  // Si la duración viene dada en un array solo se muestra el primer elemento
  if (Array.isArray(minutes)) {
    const hours = Math.floor(minutes[0] / 60);
    const minutesLeft = minutes[0] % 60;

    if (hours !== 0) {
      return `${hours}h ${minutesLeft}min`;
    }

    return `${minutesLeft}min`;
  }

  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  if (hours !== 0) {
    return `${hours}h ${minutesLeft}min`;
  }

  return `${minutesLeft}min`;
}
