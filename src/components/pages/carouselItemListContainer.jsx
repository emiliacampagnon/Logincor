import React from "react";
import Carousel from "./carousel/Carousel";
import ItemListContainer from "./itemListContainer/ItemListContainer";
import Envio from "./envio/Envio";
import Depositos from "./depositos/Depositos.jsx";

const CarouselItemListContainer = () => {
  return (
    <>
      <Carousel />
      <Envio />
      <ItemListContainer />
      <Depositos />
    </>
  );
};

export default CarouselItemListContainer;
