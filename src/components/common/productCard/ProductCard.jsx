import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ title, description, img, id }) => {
  return (
    <div className="cardContainer">
      <Card className="cardCard">
        <div className="contenedorImgCard">
          <CardMedia image={img} title="imagen producto" className="imgCard" />
        </div>

        <CardContent className="contenedorTextoCard">
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
