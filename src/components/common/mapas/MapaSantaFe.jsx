import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "./MapaSantaFe.css";

const MapaSantaFe = () => {
  const position = [-31.6585842, -60.7289004]; // Latitud y longitud de la ubicación central

  const [iconSize, setIconSize] = useState([30, 30]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize([20, 20]); // Tamaño para móvil
      } else {
        setIconSize([30, 30]); // Tamaño para pantallas más grandes
      }
    };

    // Establecer tamaño de ícono cuando la página se carga
    handleResize();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el evento cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b",
    iconSize: iconSize, // Usar el tamaño dinámico del ícono
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
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

export default MapaSantaFe;
