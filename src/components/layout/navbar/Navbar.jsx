import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function BasicExample() {
  const [show, setShow] = useState(false); // Estado para controlar la visibilidad del Offcanvas
  const location = useLocation();

  const handleClose = () => setShow(false); // Función para cerrar el Offcanvas
  const handleShow = () => setShow(true); // Función para abrir el Offcanvas

  return (
    <>
      <Navbar expand="sm" className="navbarContainer">
        <div className="containerNav">
          <Link to="/" className="navbar-brand">
            <img
              className="logoLogincor"
              src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Logincor%20blanco_Mesa%20de%20trabajo%201.png?alt=media&token=8238bbfd-465a-4165-a468-48c43a33e49e"
              width={180}
              alt="Logincor"
            />
          </Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="offcanvas-custom"
            show={show} // Controla la visibilidad del Offcanvas
            onHide={handleClose} // Cierra el Offcanvas al hacer clic fuera de él
          >
            <Offcanvas.Header className="custom-close-button">
              <Offcanvas.Title
                className="titleBurguer"
                id="offcanvasNavbarLabel"
              ></Offcanvas.Title>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={handleClose} // Cierra el Offcanvas al hacer clic en el botón de cierre
              ></button>
            </Offcanvas.Header>
            <Offcanvas.Body className="contenidoBurguer">
              <Nav>
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  onClick={handleClose} // Cierra el Offcanvas al hacer clic en un enlace
                >
                  Inicio
                </Link>
                <Link
                  to="/Servicios"
                  className={`nav-link ${
                    location.pathname === "/Servicios" ? "active" : ""
                  }`}
                  onClick={handleClose} // Cierra el Offcanvas al hacer clic en un enlace
                >
                  Servicios
                </Link>
                <Link
                  to="/Destinos"
                  className={`nav-link ${
                    location.pathname === "/Destinos" ? "active" : ""
                  }`}
                  onClick={handleClose} // Cierra el Offcanvas al hacer clic en un enlace
                >
                  Destinos
                </Link>
                <Link
                  to="/Flota"
                  className={`nav-link ${
                    location.pathname === "/Flota" ? "active" : ""
                  }`}
                  onClick={handleClose} // Cierra el Offcanvas al hacer clic en un enlace
                >
                  Flota
                </Link>
                <Link
                  to="/QuienesSomos"
                  className={`nav-link ${
                    location.pathname === "/QuienesSomos" ? "active" : ""
                  }`}
                  onClick={handleClose} // Cierra el Offcanvas al hacer clic en un enlace
                >
                  Nosotros
                </Link>
                <Link
                  to="/Contacto"
                  className={`nav-link ${
                    location.pathname === "/Contacto" ? "active" : ""
                  }`}
                  onClick={handleClose} // Cierra el Offcanvas al hacer clic en un enlace
                >
                  Contacto
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </>
  );
}

export default BasicExample;
