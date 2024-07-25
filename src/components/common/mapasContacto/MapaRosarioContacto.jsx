import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaRosarioContacto.css";

const MapaRosarioContacto = () => {
  const position = [-32.98081, -60.7355067];

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
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaRosarioContacto;