import { useState } from "react";
import { serviciosMock } from "../../../serviciosMock.js";
import { useEffect } from "react";

import Servicios from "./Servicios.jsx";

const ServiciosContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getServicios = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(serviciosMock);
        }, 0);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getServicios.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  return <Servicios items={items} error={error} />;
};

export default ServiciosContainer;
