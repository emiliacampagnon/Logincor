import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../common/cardDetail/CardDetail";

const ItemDetail = ({ fetchItem }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("ID del servicio:", id); // Agregamos un console.log para verificar el ID del servicio
    const getItem = async () => {
      try {
        const fetchedItem = await fetchItem(id);
        setItem(fetchedItem);
      } catch (err) {
        setError(err);
      }
    };

    getItem();
  }, [id, fetchItem]);

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!item) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="itemDetail">
      <CardDetail
        title={item.title}
        description={item.description}
        description2={item.description2}
        description3={item.description3}
        description4={item.description4}
        description5={item.description5}
        description6={item.description6}
        description7={item.description7}
        img={item.img}
        id={item.id}
      />
    </div>
  );
};

export default ItemDetail;
