import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import "./MapaRosario.css";

const MapaRosario = () => {
  const [iconSize, setIconSize] = useState([30, 30]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize([20, 20]);
      } else {
        setIconSize([30, 30]);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const position = [-32.98081, -60.7355067];
  const customIcon = new L.Icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/ubicacion.png?alt=media&token=c562789b-d1df-4fed-af18-2f80226aa40b",
    iconSize: iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1]],
    popupAnchor: [0, -iconSize[1]],
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

export default MapaRosario;
