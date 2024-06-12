import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapas.css";

const Mapa = () => {
  const position = [-31.35239, -64.198]; // Latitud y longitud de la ubicación central

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
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
