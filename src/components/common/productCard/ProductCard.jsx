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
        <CardMedia image={img} title="imagen producto" className="imgCard" />

        <CardContent>
          <Typography
            className="typo"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="typo" variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};
export default ProductCard;
