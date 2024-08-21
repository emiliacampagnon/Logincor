import { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ title, description, img, id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    // Set a short timeout to ensure the placeholder covers the entire card until everything is loaded
    setTimeout(() => setContentLoaded(true), 100);
  };

  return (
    <div className="cardContainer">
      <Card className="cardCard">
        {!contentLoaded && (
          <div className="card-placeholder">
            <div className="image-placeholder"></div>
            <div className="text-placeholder">
              <div className="title-placeholder"> </div>
              <div className="description-placeholder"> </div>
            </div>
          </div>
        )}

        <div
          className="contenedorImgCard"
          style={{ display: contentLoaded ? "block" : "none" }}
        >
          <CardMedia
            component="img"
            image={img}
            title="imagen producto"
            className="imgCard"
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        </div>

        <CardContent
          className="contenedorTextoCard"
          style={{ display: contentLoaded ? "block" : "none" }}
        >
          <Typography
            className="typo"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="typo2" variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
