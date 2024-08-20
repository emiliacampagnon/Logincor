import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaSantaFeContacto.css";

const MapaSantaFeContacto = () => {
  const position = [-31.6585842, -60.7289004];
  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b", // URL del ícono
    iconSize: [30, 30], // Tamaño del ícono [ancho, alto]
    iconAnchor: [16, 32], // Punto en el que se ancla el ícono (debe ser la base del ícono)
    popupAnchor: [0, -32], // Ajusta el punto de anclaje del popup
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      className="contenedorMapaOficinaContacto"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        className="mapaOficinaContacto"
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

export default MapaSantaFeContacto;
