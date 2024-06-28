import "./Envio.css";
import SearchIcon from "@mui/icons-material/Search";

const Envio = () => {
  return (
    <div className="containerPrincipal">
      <div className="seguiContainer">
        <a
          href="http://logincor.sytes.net/logincor/ingclientes.asp"
          target="_blank"
        >
          <img className="segui" src="../public/seguiTuEnvio.png" alt="" />
        </a>
        <SearchIcon className="searchIcon" />
      </div>

      <h5 className="estadoEnvio">
        Conocé el estado de tus envíos en todo momento.
      </h5>
    </div>
  );
};

export default Envio;
