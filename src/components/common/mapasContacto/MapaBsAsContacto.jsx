import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaBsAsContacto.css";

const MapaBsAsContacto = () => {
  const position = [-34.6644, -58.4348]; // Latitud y longitud de la ubicación central

  const [iconSize, setIconSize] = useState([30, 30]); // Tamaño inicial del ícono

  useEffect(() => {
    // Función para ajustar el tamaño del ícono según el tamaño de la pantalla
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize([20, 20]); // Tamaño reducido para pantallas pequeñas
      } else {
        setIconSize([30, 30]); // Tamaño normal para pantallas más grandes
      }
    };

    // Agregar el event listener para detectar cambios de tamaño de pantalla
    window.addEventListener("resize", handleResize);

    // Llamar a la función una vez al cargar para establecer el tamaño correcto inicialmente
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b", // URL del ícono
    iconSize: iconSize, // Tamaño del ícono dinámico
    iconAnchor: [iconSize[0] / 2, iconSize[1]], // Ajusta el punto de anclaje según el tamaño
    popupAnchor: [0, -iconSize[1]], // Ajusta el punto de anclaje del popup
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="contenedorMapaBsAsContacto"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        className="mapaBsAsContacto"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaBsAsContacto;
