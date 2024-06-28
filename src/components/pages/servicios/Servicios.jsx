import ProductCardServicios from "../../common/productCardServicios/productCardServicios";
import "./Servicios.css";

const Servicios = ({ items, error }) => {
  return (
    <div className="contenedorTotal">
      <div className="contenedorTitulo">
        <img className="titulo" src="../public/nuestrosServicios.png" alt="" />
      </div>
      <div className="itemList">
        {items.map(({ id, title, img }) => {
          return (
            <ProductCardServicios
              style={{
                width: "95%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                margin: "10px",
              }}
              key={id}
              title={title}
              img={img}
              id={id}
            />
          );
        })}
      </div>

      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default Servicios;
