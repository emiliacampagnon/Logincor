// import { CenterFocusStrong, WidthFull } from "@mui/icons-material";
// import ProductCard from "../../common/productCard/ProductCard";

// const ItemList = ({ items, error }) => {
//   return (
//     <div
//       style={{
//         width: "95%",
//         display: "flex",
//         flexDirection: "row",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "space-evenly",
//         padding: "10px",
//         margin: "10px",
//       }}
//     >
//       {items.map(({ id, title, description, img }) => {
//         return (
//           <ProductCard
//             key={id}
//             title={title}
//             description={description}
//             img={img}
//             id={id}
//           />
//         );
//       })}
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items, error }) => {
  return (
    <div className="itemList">
      {items.map(({ id, title, description, img }) => {
        return (
          <ProductCard
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
            description={description}
            img={img}
            id={id}
          />
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default ItemList;
//       {error && <h2>{error.message}</h2>}
//     </div>
//   );
// };

// export default ItemList;
