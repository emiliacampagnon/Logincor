import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaCbaContacto.css";

const MapaCbaContacto = () => {
  const position = [-31.35239, -64.198]; // Latitud y longitud de la ubicación central
  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b", // URL del ícono
    iconSize: [30, 30], // Tamaño del ícono [ancho, alto]
    iconAnchor: [16, 32], // Punto en el que se ancla el ícono (debe ser la base del ícono)
    popupAnchor: [0, -32], // Ajusta el punto de anclaje del popup
  });
  return (
    <MapContainer
      className="contenedorMapaCordobaContacto"
      center={position}
      zoom={13}
      zoomControl={false} // Desactiva los controles de zoom
      attributionControl={false} // Desactiva la atribución de OpenStreetMap
    >
      <TileLayer
        className="mapaCordobaContacto"
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

export default MapaCbaContacto;
