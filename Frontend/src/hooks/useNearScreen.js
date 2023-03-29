import { useEffect, useRef, useState } from 'react';

function useNearScreen({ distance = '1000px', externalRef, once = true }) {
  const [nearScreen, setNearScreen] = useState(false);

  // Referencia del componente que se renderizará
  const elementRef = useRef();

  useEffect(() => {
    const elementToWatch = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setNearScreen(true);

        // Desconectar el observer para que no se vuelva a ejecutar
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setNearScreen(false);
      }
    };

    // Mostrar el componente cuando el viewport lo requiera cambiando el estado del show a true
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    // Decirle al intersection observer que observe el elemento de referencia
    if (elementToWatch) observer.observe(elementToWatch);

    // Retornar una función para que el observer se desconecte cuando el componente no se necesite
    return () => observer && observer.disconnect();
  }, []);

  return { nearScreen };
}

export default useNearScreen;
