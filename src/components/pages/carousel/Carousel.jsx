import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Carousel.css";

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="carousel-container">
      {isLoading && !hasError && (
        <Skeleton
          className="skeleton-placeholder"
          height={300}
          width={"100%"}
        />
      )}

      <img
        className={`imgCamion ${isLoading ? "hidden" : ""}`}
        src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/logicnor%20atardecer-2.jpg?alt=media&token=07cc6bb3-d7fa-4214-b916-1b73a8b3e1ae"
        alt="Camion Logincor"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />

      {hasError && <p>La imagen no se pudo cargar.</p>}
    </div>
  );
};

export default Carousel;
