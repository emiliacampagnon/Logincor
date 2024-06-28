import React from "react";

import "./Depositos.css";
import MapComponent from "../../common/mapas/Mapas";
import Mapa from "../../common/mapas/Mapas";
import MapaBsAs from "../../common/mapas/MapaBsAs";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Depositos = () => {
  return (
    <div className="Container">
      <img
        className="nuestrosDepositos"
        src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/nuestrosDepositos.png?alt=media&token=9fe7dd7b-a852-4ac6-8b5f-20b8e9169ce2"
        alt=""
      />
      <div className="contenedorMapas">
        <div className="cardMapas">
          <div className="textosMaps">
            <p className="h2Depositos">Córdoba</p>
            <p className="h3Depositos">Av. Agustín Tosco 5000</p>
            <p className="h4Depositos">0351 - 7000710</p>
            <p className="h4Depositos">Horarios: 8:00 a 17:00</p>
          </div>
          <div className="contenedorMapaCordoba">
            <Mapa />
          </div>
          <Button
            className="botonMapa"
            component={Link}
            to="https://maps.app.goo.gl/GA1CacKCoZHws2sN6"
            variant="contained"
            target="_blank"
          >
            ¿Cómo llegar?
          </Button>
        </div>
        <div className="cardMapas">
          <div className="textosMaps">
            <p className="h2Depositos">Buenos Aires</p>
            <p className="h3Depositos">San Pedrito 3456</p>
            <p className="h4Depositos">011 - 52639815</p>
            <p className="h4Depositos">Horarios: 8:00 a 17:00</p>
          </div>
          <div className="contenedorMapaCordoba">
            <MapaBsAs />
          </div>
          <Button
            className="botonMapa"
            component={Link}
            to="https://maps.app.goo.gl/mA2SZ2NSoysVtU4N7"
            variant="contained"
            target="_blank"
          >
            ¿Cómo llegar?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Depositos;
