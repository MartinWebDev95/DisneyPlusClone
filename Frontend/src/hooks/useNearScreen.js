/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import { useEffect, useState, useRef } from 'react';

export default function useNearScreen({ distance = '150px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);

  // Hook para obtener la referencia del componente que se renderizará
  const elementRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setShow(true);

        // Desconectar el observer para que no se vuelva a ejecutar
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    // Mediante este promise estamos importando la libreria de IntersectionObserver de manera dinámica para que en caso de que el navegador soporte Insersection Observer, no se cargue la librería de manera innecesaria
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer'),
    ).then(() => {
      // Mostrar el componente cuando el viewport lo requiera cambiando el estado del show a true
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      // Decirle al intersection observer que observe el elemento de referencia
      if (element) observer.observe(element);
    });

    // Retornar una función para que el observer se desconecte cuando el componente no se necesite
    return () => observer && observer.disconnect();
  });

  return { isNearScreen, elementRef };
}
