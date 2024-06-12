import MapaOficina from "../../common/mapas/MapaOficina.jsx";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Mapa from "../../common/mapas/Mapas.jsx";
import MapaBsAs from "../../common/mapas/MapaBsAs.jsx";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contenedorContacto">
      <div className="contenedorImgContacto">
        <img
          className="comunicateConNosotros"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/comunicate%20con%20nosotros-04.png?alt=media&token=27f5ef8a-4acd-43b7-a771-6654acbc15be"
          alt=""
        />
      </div>
      <div className="todasCards">
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Oficina Comercial</p>
              <p className="texto2Direcciones">José Betinoti 3099</p>
              <p className="texto2Direcciones">0351 - 7000710</p>
              <p className="texto2Direcciones">
                administracion@logincor.com.ar
              </p>
              <p className="texto2Direcciones">Horarios: 8:00 a 18:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaOficina />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/hgwoL2s5uo9c215j6"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Depósito Córdoba</p>
              <p className="texto2Direcciones">
                Av. Agustín Tosco 5000 (colectora Tadicor){" "}
              </p>
              <p className="texto2Direcciones">0351 - 7000710</p>
              <p className="texto2Direcciones">
                administracion@logincor.com.ar
              </p>
              <p className="texto2Direcciones">Horarios: 8:00 a 17:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <Mapa />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/diP7ATf3VCtqzk5CA"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
        <div className="contenedorDirecciones">
          <div className="contenedorIndividual">
            <div className="contenedorTextos">
              <p className="texto1Direcciones">Depósito Buenos Aires</p>
              <p className="texto2Direcciones">
                San Pedrito 3456 - Villa Soldati
              </p>
              <p className="texto2Direcciones">011 - 52639815</p>
              <p className="texto2Direcciones">
                administracion@logincor.com.ar
              </p>
              <p className="texto2Direcciones">Horarios: 8:00 a 17:00 hs</p>
            </div>
            <div className="contenedorMapa">
              <MapaBsAs />
              <Button
                className="botonMapaContacto"
                component={Link}
                to="https://maps.app.goo.gl/UQEPd3vJSnmf1zNT9"
                variant="contained"
                target="_blank"
              >
                ¿Cómo llegar?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
