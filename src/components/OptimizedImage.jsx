import { useState, useRef, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  width = '100%',
  height = '100%',
  onClick,
  priority = false,
  fallbackSrc = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      return;
    }
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}

      {hasError && (
        <div className="image-error">
          <span>📷</span>
          <p>Image not available</p>
        </div>
      )}

      {isInView && !hasError && (
        <img
          src={imgSrc}
          alt={alt}
          className={`optimized-image ${imgClassName} ${
            isLoaded ? 'loaded' : 'loading'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
