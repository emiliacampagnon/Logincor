import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaOficina.css";

const MapaOficina = () => {
  const position = [-31.3565004, -64.2172738];
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
      className="contenedorMapaOficina"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        className="mapaOficina"
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

export default MapaOficina;
