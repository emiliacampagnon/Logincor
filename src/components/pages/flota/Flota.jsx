import React, { useState, useEffect } from "react";
import "./Flota.css";
import Skeleton from "react-loading-skeleton";

const Flota = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="contenedorTotal">
      <div className="contenedorTitulo">
        {!imageLoaded && loading && <Skeleton className="skeletonTitulo" />}
        <img
          className="titulo"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/titulooo-05.png?alt=media&token=a6bc5db2-4c14-4475-b387-d07e58107c36"
          alt=""
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </div>
      <div className="contenedorFlota">
        <div className="conteTextos">
          <h1 className="texto1">
            En Logincor disponemos de una amplia flota de vehículos propios, que
            nos permite ofrecer una variedad de opciones con diferentes
            capacidades de carga para adaptarnos a las necesidades específicas
            de nuestros clientes. Entre las diferentes opciones contamos con
            vehículos con pala incorporada para facilitar y agilizar la carga y
            descarga de mercadería.
          </h1>
          <h1 className="texto1">
            Nuestra flota está compuesta por vehículos modernos y nuevos, que
            cumplen con los más rigurosos estándares de mantenimiento. Además
            están equipados con sistemas de seguimiento satelital para
            garantizar la seguridad y la eficiencia en cada entrega.
          </h1>
        </div>

        <div className="contenedorCardVehiculos">
          <div className="cardVehiculos">
            <div className="contenedorTituloFlota">
              <p className="titulosVehiculos">Vehículos de gran porte</p>
            </div>

            <div className="contenedorTextosFlota">
              <p className="textoFlota">• Camiones semi-remolque</p>
              <p className="textoFlota">• Chasis</p>
              <p className="textoFlota">• Chasis acoplado</p>
              <p className="textoFlota">• Chasis sider</p>
            </div>
          </div>
          <div className="cardVehiculos">
            <div className="contenedorTituloFlota">
              <p className="titulosVehiculos">Vehículos de mediano porte</p>
            </div>
            <div className="contenedorTextosFlota">
              <p className="textoFlota">• Balancín sider</p>
              <p className="textoFlota">• Utilitatio sider</p>
              <p className="textoFlota">• Utilitario furgón</p>
              <p className="textoFlota">• Utilitario con carrocería</p>
            </div>
          </div>
          <div className="cardVehiculos">
            <div className="contenedorTituloFlota">
              <p className="titulosVehiculos">Auxiliares</p>
            </div>
            <div className="contenedorTextosFlota">
              <p className="textoFlota">• Autoelevadores 2,5 tn</p>
              <p className="textoFlota">• Autoelevadores 3,5 tn</p>
              <p className="textoFlota">• Apiladores 8m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flota;
