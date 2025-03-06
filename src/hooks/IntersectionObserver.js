import { useEffect, useState, useRef } from "react";

export default function useIntersectionObserver(options = {}) {
  const [hasIntersected, setHasIntersected] = useState(false);  
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasIntersected(true);  
        observer.disconnect();   
      }
    }, options);

    if (ref.current && !hasIntersected) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options, hasIntersected]); 

  return [ref, hasIntersected];  
}
