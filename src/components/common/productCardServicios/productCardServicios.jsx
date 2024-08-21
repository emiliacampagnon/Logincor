import { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./productCardServicios.css";

const ProductCardServicios = ({
  title,
  description,
  img,
  id,
  description2,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="cardContainerServicios">
      <Link to={`/servicios/${id}`} className="linkServicios">
        <Card className="cardCardServicios">
          <CardContent className="contenedorTextoServicios">
            <Typography
              underline="none"
              className="typoServicios"
              variant="h5"
              component="div"
              style={{ textDecoration: "none !important" }}
            >
              {title}
            </Typography>
          </CardContent>
          <div className="contenedorImgServicios">
            {!imageLoaded && (
              <div className="placeholder-imgCardServicios"></div>
            )}
            <CardMedia
              component="img"
              image={img}
              title={title}
              className="imgCardServicios"
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCardServicios;
