
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items, error }) => {
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

export default ItemList;
