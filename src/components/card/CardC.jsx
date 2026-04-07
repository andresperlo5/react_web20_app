import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";
import { Link } from "react-router";

const CardC = ({ image, title, price, description, idProduct }) => {
  return (
    <>
      <Card className="my-5">
        <div className="div-image">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text className="text-truncate">{description}</Card.Text>
          <Link to={`/product-detail/${idProduct}`} className="btn btn-primary">
            Ver Mas
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
