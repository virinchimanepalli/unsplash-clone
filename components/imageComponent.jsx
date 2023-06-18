import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";

// Create a custom Image component
const MyImage = ({ lowResSrc, highResSrc, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = highResSrc;
      img.onload = () => {
        setLoaded(true);
      };
    }
  }, [inView, highResSrc]);

  return (
    <div ref={ref}>
      {loaded ? (
        <NextImage
          src={highResSrc}
          alt={alt}
          width={500}
          height={300}
          priority
        />
      ) : (
        <NextImage
          src={lowResSrc}
          alt={alt}
          width={500}
          height={300}
          priority
        />
      )}
    </div>
  );
};

export default MyImage;
