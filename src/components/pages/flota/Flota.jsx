import "./Flota.css";

const Flota = () => {
  return (
    <div className="contenedorTotal2">
      <div className="contenedorImg2">
        <img
          className="nosotrosImg2"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Nuestros%20Vehiculos-04.png?alt=media&token=2e648c90-369b-4493-8f7e-5488fed92a80"
          alt=""
        />
      </div>
      <div className="contenedorFlota">
        <div className="contenedorIntro">
          <p className="texto1Flota">
            En Logincor disponemos de una amplia flota de vehículos propios, que
            nos permite ofrecer una variedad de opciones con diferentes
            capacidades de carga para adaptarnos a las necesidades específicas
            de nuestros clientes. Entre las diferentes opciones contamos con
            vehículos con pala incorporada para facilitar y agilizar la carga y
            descarga de mercadería.
          </p>
          <p className="texto1Flota">
            Nuestra flota está compuesta por vehículos modernos y nuevos, que
            cumplen con los más rigurosos estándares de mantenimiento. Además
            están equipados con sistemas de seguimiento satelital para
            garantizar la seguridad y la eficiencia en cada entrega.
          </p>
        </div>
        <div className="contenedorCardVehiculos">
          <div className="cardVehiculos">
            <p className="titulosVehiculos">Vehículos de gran porte</p>
            <div className="contenedorVehiculos">
              <img
                className="imgVehiculos"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Grande%20ford%201722%20chasis.jpg?alt=media&token=81be69cf-717c-4003-a901-1a4364b9a2a9"
                alt=""
              />
              <img
                className="imgVehiculos"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Grande%20vw%2017280%20semiremolque.png?alt=media&token=35d89097-cd6c-4b90-a6cb-697a18f549d3"
                alt=""
              />
            </div>
          </div>
          <div className="cardVehiculos">
            <p className="titulosVehiculos">Vehículos de mediano porte</p>
            <div className="contenedorVehiculos">
              <img
                className="imgVehiculos"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Mediano%20accelo.jpg?alt=media&token=60b8ea11-bb85-42e5-8a03-57cb4128630c"
                alt=""
              />
              <img
                className="imgVehiculos"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Mediano%20Iveco%20Daily.jpg?alt=media&token=90ea4ebb-0684-42be-85ed-ae296b4a8971"
                alt=""
              />
              <img
                className="imgVehiculos"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/Mediano%20transit.jpg?alt=media&token=acb18e5b-6c2b-4a4c-af21-9c70689f8a1d"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="contenedorAux">
          <p className="titulosVehiculos">Auxiliares</p>
          <div className="contenedorImgAux">
            <img
              className="imgVehiculos"
              src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/autoelevador.jpg?alt=media&token=c2255399-45a8-4c8a-adb9-2a0785b0f4b7"
              alt=""
            />
            <img
              className="imgVehiculos"
              src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/apiladora%20toyota.jpg?alt=media&token=0124a15f-166b-4e53-9a53-b17f19e08714"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flota;
