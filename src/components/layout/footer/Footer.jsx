import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/">
        <img
          className="logoFooter"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Editable%20(1)_Mesa%20de%20trabajo%201.png?alt=media&token=a004e9c5-44ae-44f3-bc3c-fcb9ca4d66f6"
          width={100}
          alt="Logo Logincor"
        />
      </Link>
      <div className="iconosContainer">
        <div>
          <Link to="https://wa.me/5493517078383" target="_blank">
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
