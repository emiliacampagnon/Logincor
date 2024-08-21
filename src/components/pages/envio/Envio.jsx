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
            src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/segui%20tu%20envio%20a-03-03.png?alt=media&token=e41197e4-cc8c-484b-8692-21db3943b743"
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
