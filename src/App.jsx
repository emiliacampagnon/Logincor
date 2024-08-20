import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import ItemDetail from "./components/pages/itemDetail/ItemDetail.jsx";
import CartContextProvider from "./context/CartContext.jsx";

import CarouselItemListContainer from "./components/pages/carouselItemListContainer.jsx";
import { useState } from "react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import ServiciosContainer from "./components/pages/servicios/ServiciosContainer.jsx";
import { serviciosMock } from "./serviciosMock"; // Importa tus datos de servicios
import ProvinciasLocalidades from "./components/pages/localidades/localidades.jsx";
import QuienesSomos from "./components/pages/nosotros/quienesSomos.jsx";
import Flota from "./components/pages/flota/Flota.jsx";
import Contacto from "./components/pages/contacto/Contacto.jsx";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  const fetchItem = async (id) => {
    // Convierte id a número utilizando el operador unario +
    const itemId = +id;

    // Implementa la lógica para obtener el servicio por ID
    const item = serviciosMock.find((service) => service.id === itemId);
    console.log("Servicio encontrado:", item); // Para verificar si el servicio se ha encontrado correctamente

    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  };

  if (!showContent) {
    return (
      <div className="initial-page">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Logincor%20blanco_Mesa%20de%20trabajo%201.png?alt=media&token=8238bbfd-465a-4165-a468-48c43a33e49e"
          alt="Logincor"
          className="initial-image"
        />
        <button
          onClick={handleShowContent}
          className="view-more-button"
          title="Ver más"
        >
          <AddIcon className="addIcon" />
        </button>
      </div>
    );
  }

  return (
    <div className="app-content">
      <Router>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CarouselItemListContainer />} />
              <Route path="servicios" element={<ServiciosContainer />} />
              <Route
                path="/servicios/:id"
                element={<ItemDetail fetchItem={fetchItem} />}
              />

              <Route path="category/:name" element={<ItemListContainer />} />
              <Route path="/Destinos" element={<ProvinciasLocalidades />} />
              <Route path="/QuienesSomos" element={<QuienesSomos />} />
              <Route path="/Flota" element={<Flota />} />
              <Route path="/Contacto" element={<Contacto />} />

              <Route path="*" element={<h1>Error 404</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  );
};

export default App;
