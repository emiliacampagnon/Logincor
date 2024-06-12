import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function BasicExample() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navbarContainer">
      <Link to="/" className="navbar-brand">
        <img
          className="logoLogincor"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Editable%20(1)_Mesa%20de%20trabajo%201.png?alt=media&token=a004e9c5-44ae-44f3-bc3c-fcb9ca4d66f6"
          width={180}
          alt="LogoLogincor"
        />
      </Link>

      <Container className="pages">
        <Nav className="navbar-nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Inicio
          </Link>
          <Link
            to="/Servicios"
            className={`nav-link ${
              location.pathname === "/Servicios" ? "active" : ""
            }`}
          >
            Servicios
          </Link>
          <Link
            to="/Destinos"
            className={`nav-link ${
              location.pathname === "/Destinos" ? "active" : ""
            }`}
          >
            Destinos
          </Link>
          <Link
            to="/Flota"
            className={`nav-link ${
              location.pathname === "/Flota" ? "active" : ""
            }`}
          >
            Flota
          </Link>
          <Link
            to="/QuienesSomos"
            className={`nav-link ${
              location.pathname === "/QuienesSomos" ? "active" : ""
            }`}
          >
            Nosotros
          </Link>
          <Link
            to="/Contacto"
            className={`nav-link ${
              location.pathname === "/Contacto" ? "active" : ""
            }`}
          >
            Contacto
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
