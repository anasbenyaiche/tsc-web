import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage = ({ src, alt, className = '', width, height }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Create new image to preload
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
    };
    
    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <>
      {!loaded && !error && (
        <div 
          className={`bg-neutral-200 animate-pulse rounded ${className}`}
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
      
      {error && (
        <div 
          className={`bg-neutral-100 flex items-center justify-center rounded ${className}`}
          style={{ width, height }}
        >
          <span className="text-neutral-500">Image non disponible</span>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={{ 
          display: loaded ? 'block' : 'none',
          width,
          height
        }}
        width={width}
        height={height}
        loading="lazy"
      />
    </>
  );
};

export default LazyImage;