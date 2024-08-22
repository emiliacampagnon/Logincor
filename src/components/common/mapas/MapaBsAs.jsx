import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import "./MapaBsAs.css";

const MapaBsAs = () => {
  const [iconSize, setIconSize] = useState([30, 30]);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth < 768) {
        // Por ejemplo, ajustar el tamaño para pantallas pequeñas
        setIconSize([20, 20]);
      } else {
        setIconSize([30, 30]);
      }
    };

    updateIconSize(); // Llamar para el tamaño inicial
    window.addEventListener("resize", updateIconSize); // Actualizar en cambios de tamaño

    return () => window.removeEventListener("resize", updateIconSize); // Limpiar el evento
  }, []);

  const position = [-34.6644, -58.4348]; // Latitud y longitud de la ubicación central
  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b", // URL del ícono
    iconSize: iconSize, // Tamaño dinámico del ícono
    iconAnchor: [iconSize[0] / 2, iconSize[1]], // Ajusta el punto de anclaje al centro horizontal y base vertical del ícono
    popupAnchor: [0, -iconSize[1]], // Ajusta el punto de anclaje del popup basado en el tamaño del ícono
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="contenedorMapaBsAs"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        className="mapaBsAs"
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

export default MapaBsAs;
