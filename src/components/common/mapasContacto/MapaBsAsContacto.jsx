import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaBsAsContacto.css";

const MapaBsAsContacto = () => {
  const position = [-34.6644, -58.4348]; // Latitud y longitud de la ubicación central

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
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaBsAsContacto;
