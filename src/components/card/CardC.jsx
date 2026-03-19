import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

const CardC = ({ image, title, price, description }) => {
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
          <a href="/product-detail" className="btn btn-primary">
            Ver Mas
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
