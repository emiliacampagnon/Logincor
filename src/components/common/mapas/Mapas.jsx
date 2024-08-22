import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapas.css";

const Mapa = () => {
  const position = [-31.35239, -64.198]; // Latitud y longitud de la ubicación central
  const [iconSize, setIconSize] = useState([30, 30]); // Tamaño del ícono por defecto

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        // Pantalla móvil
        setIconSize([20, 20]); // Tamaño del ícono para móvil
      } else {
        // Pantalla grande
        setIconSize([30, 30]); // Tamaño del ícono para pantallas más grandes
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a la función inicialmente para establecer el tamaño correcto

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b", // URL del ícono
    iconSize: iconSize, // Tamaño dinámico del ícono
    iconAnchor: [iconSize[0] / 2, iconSize[1]], // Ajusta el punto de anclaje al centro horizontal y base vertical del ícono
    popupAnchor: [0, -iconSize[1]], // Ajusta el punto de anclaje del popup basado en el tamaño del ícono
  });

  return (
    <MapContainer
      className="contenedorMapaCordoba"
      center={position}
      zoom={13}
      zoomControl={false} // Desactiva los controles de zoom
      attributionControl={false} // Desactiva la atribución de OpenStreetMap
    >
      <TileLayer
        className="mapaCordoba"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
