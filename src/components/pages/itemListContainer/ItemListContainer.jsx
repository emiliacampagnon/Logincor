import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(products);
        }, 0);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  return (
    <div className="itemList">
      <div className="contenedorCardItemList">
        {items.map(({ id, title, description, img }) => {
          return (
            <ProductCard
              key={id}
              title={title}
              description={description}
              img={img}
              id={id}
            />
          );
        })}

        {error && <h2>{error.message}</h2>}
      </div>
    </div>
  );
};

export default ItemListContainer;
