import "./Flota.css";

const Flota = () => {
  return (
    <div className="contenedorTotal5">
      <div className="contenedorImg2">
        <img
          className="nosotrosImg2"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/titulooo-05.png?alt=media&token=a6bc5db2-4c14-4475-b387-d07e58107c36"
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
