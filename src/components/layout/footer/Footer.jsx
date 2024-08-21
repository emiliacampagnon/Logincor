import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/" className="containerLogoFooter">
        <img
          className="logoFooter"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/logo%20logincor-03.png?alt=media&token=3c30fbc0-61ac-484e-9f21-6788654ce3e4"
          width={100}
          alt="Logo Logincor"
        />
      </Link>
      <div className="iconosContainer">
        <div>
          <Link to="https://wa.link/wixh9n" target="_blank">
            <WhatsAppIcon className="icono" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com/logincor/" target="_blank">
            <InstagramIcon className="icono" />
          </Link>
        </div>
        <div>
          <Link
            to="https://www.facebook.com/share/VkgVhjFtvg9Tj6F8/?mibextid=LQQJ4d"
            target="_blank"
          >
            <FacebookIcon className="icono" />
          </Link>
        </div>
      </div>
    </div>
  );
};
