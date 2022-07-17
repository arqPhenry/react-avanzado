import { useEffect, useState, useRef } from 'react';

function useNearScreen () {
  const [showCard, setShowCard] = useState(false);
  const element = useRef(null);

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log('Intersecta');
        setShowCard(true);
        observer.disconnect();
      } else {
        console.log('No intersecta');
        setShowCard(false);
      }
    });
    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [showCard, element];
}

export { useNearScreen };
