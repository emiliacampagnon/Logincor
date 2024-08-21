import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import ProductCardServicios from "../../common/productCardServicios/productCardServicios";
import "./Servicios.css";

const Servicios = ({ items, error }) => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="contenedorTotal">
      <div className="contenedorTitulo">
        {!imageLoaded && loading && <Skeleton className="skeletonTitulo" />}
        <img
          className="titulo"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/nuestrosServicios.png?alt=media&token=44603981-80e8-4df6-ba35-2409cac3904b"
          alt=""
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </div>
      <div className="itemList">
        {items.map(({ id, title, img }) => (
          <ProductCardServicios
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: "10px",
              margin: "10px",
            }}
            key={id}
            title={title}
            img={img}
            id={id}
          />
        ))}
      </div>

      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default Servicios;
