import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaOficina.css";

const MapaOficina = () => {
  const position = [-31.3565004, -64.2172738]; 

  return (
    <MapContainer center={position} zoom={13} className="contenedorMapaOficina">
      <TileLayer
        className="mapaOficina"
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

export default MapaOficina;
