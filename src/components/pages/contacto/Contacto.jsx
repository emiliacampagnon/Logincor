import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contacto.css";
import MapaOficinaContacto from "../../common/mapasContacto/MapaOficinaContacto.jsx";
import MapaCbaContacto from "../../common/mapasContacto/MapaCbaContacto.jsx";
import MapaBsAsContacto from "../../common/mapasContacto/MapaBsAsContacto.jsx";
import MapaRosarioContacto from "../../common/mapasContacto/MapaRosarioContacto.jsx";
import MapaSantaFeContacto from "../../common/mapasContacto/MapaSantaFeContacto.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Asegúrate de importar el CSS de Skeleton

const Contacto = () => {
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
        {loading && !imageLoaded ? (
          <Skeleton className="skeletonTitulo" />
        ) : (
          <img
            className="titulo"
            src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/titulooo-07.png?alt=media&token=6f951f96-48f6-4c61-a906-77e80416e64a"
            alt="Título Contacto"
            onLoad={handleImageLoad} // Asegúrate de que esto se ejecute al cargar la imagen
          />
        )}
      </div>
      <div className="todasCards">
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Oficina Comercial Córdoba</p>
              <p className="texto2Direcciones">José Betinoti 3099</p>
              <p className="texto2Direcciones">0351 - 7000710</p>
              <p className="texto2Direcciones">
                administracion@logincor.com.ar
              </p>
              <p className="texto2Direcciones">Horarios: 8:00 a 18:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaOficinaContacto />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/hgwoL2s5uo9c215j6"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Depósito Córdoba</p>
              <p className="texto2Direcciones">
                Av. Agustín Tosco 5000 (colectora Tadicor){" "}
              </p>
              <p className="texto2Direcciones">0351 - 7000710</p>
              <p className="texto2Direcciones">Horarios: 8:00 a 17:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaCbaContacto />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/diP7ATf3VCtqzk5CA"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Depósito Buenos Aires</p>
              <p className="texto2Direcciones">
                San Pedrito 3456 - Villa Soldati
              </p>
              <p className="texto2Direcciones">011 - 52639815</p>
              <p className="texto2Direcciones">Horarios: 8:00 a 17:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaBsAsContacto />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/UQEPd3vJSnmf1zNT9"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Depósito Rosario</p>
              <p className="texto2Direcciones">Calle 1808 n° 12025</p>
              <p className="texto2Direcciones">0351 - 7000710</p>
              <p className="texto2Direcciones">Horarios: 8:00 a 17:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaRosarioContacto />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/kgaubhei7tddZnQy9"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Depósito Santa Fe</p>
              <p className="texto2Direcciones">Dr. Zavalla 1239</p>
              <p className="texto2Direcciones">0351 - 7000710</p>
              <p className="texto2Direcciones">Horarios: 8:00 a 17:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaSantaFeContacto />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/BWpGXyQxAzVgDQDg6"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
