import { useState, useRef, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  onClick,
  priority = false, // hero/first image માટે true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer - image viewport માં આવે ત્યારે જ load કરો
  useEffect(() => {
    if (priority) return; // priority image તરત load થશે

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // 200px પહેલાથી load શરૂ
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
      {/* Placeholder - image load થાય ત્યાં સુધી */}
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="image-error">
          <span>📷</span>
          <p>Image not available</p>
        </div>
      )}

      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchpriority={priority ? 'high' : 'auto'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
