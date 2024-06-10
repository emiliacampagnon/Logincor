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
            <Typography
              className="typoServicios"
              variant="body2"
              color="text.secondary"
            >
              {description}
            </Typography>
            <Typography
              className="typoServicios"
              variant="body2"
              color="text.secondary"
            >
              {description2}
            </Typography>
          </CardContent>
          <div className="contenedorImgServicios">
            <CardMedia
              component="img"
              image={img}
              title={title}
              className="imgCardServicios"
            />
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCardServicios;
