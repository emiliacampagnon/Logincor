import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./productCardServicios.css";

const ProductCardServicios = ({ title, description, img, id, description2 }) => {
  return (
    <div className="cardContainer">
      <Link to={`/servicios/${id}`} className="link"> 
        <Card className="cardCard">
          <CardContent>
            <Typography
              underline="none"
              className="typo"
              variant="h5"
              component="div"
              style={{ textDecoration: "none !important" }}
            >
              {title}
            </Typography>
            <Typography className="typo" variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography className="typo" variant="body2" color="text.secondary">
              {description2}
            </Typography>
          </CardContent>
          <div className="contenedorImg">
            <CardMedia component="img" image={img} title={title} className="imgCard" />
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCardServicios;
