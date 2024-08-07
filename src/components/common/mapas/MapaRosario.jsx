import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "./MapaRosario.css";

const MapaRosario = () => {
  const position = [-32.98081, -60.7355067]; // Latitud y longitud de la ubicación central

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
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaRosario;
