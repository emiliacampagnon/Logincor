import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./CardDetail.css";

const CardDetail = ({
  title,
  description,
  img,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
}) => {
  return (
    <div className="detailContainer">
      <Card className="detailCard">
        <CardMedia
          component="img"
          image={img}
          title={title}
          className="detailImgCard"
        />
        <CardContent className="cardContentServicios">
          <Typography
            underline="none"
            className="detailTypo"
            component="div"
            style={{ textDecoration: "none !important" }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
      <div className="detailTextContainer">
        {description && <h3 className="detailH3">{description}</h3>}
        {description2 && <h3 className="detailH3">{description2}</h3>}
        {description3 && <h3 className="detailH3">{description3}</h3>}
        {description4 && <h3 className="detailH3">{description4}</h3>}
        {description5 && <h3 className="detailH3">{description5}</h3>}
        {description6 && <h3 className="detailH3">{description6}</h3>}
        {description7 && <h3 className="detailH3">{description7}</h3>}
      </div>
    </div>
  );
};

export default CardDetail;
