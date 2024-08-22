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
          <img
            className="segui"
            src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/seguiTuEnvio.png?alt=media&token=3492dafe-f911-42c7-9d60-9878eee5f16e"
            alt=""
          />
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
