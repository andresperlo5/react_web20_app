import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";

const FavPage = () => {
  const [favoritosUsuario, setFavoritosUsuario] = useState([]);

  const obtenerFavoritos = () => {
    const favoritosLs = JSON.parse(localStorage.getItem("fav"));
    setFavoritosUsuario(favoritosLs);
  };

  const deleteProductFav = (ev, i) => {
    ev.preventDefault();

    Swal.fire({
      title:
        "Estas seguro de que quieres eliminar a este producto de Favoritos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Estoy seguro!",
      cancelButtonText: "No!",
    }).then((result) => {
      if (result.isConfirmed) {
        const favoritosLs = JSON.parse(localStorage.getItem("fav"));
        favoritosLs.splice(i, 1);
        localStorage.setItem("fav", JSON.stringify(favoritosLs));

        Swal.fire({
          title: "El producto fue eliminado de tu seccion de favoritos!",
          icon: "success",
        });

        obtenerFavoritos();
      }
    });
  };

  const addProdCart = (ev, idProduct) => {
    ev.preventDefault();
    console.log(idProduct);
    const carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExiste = carritoLs.find((prod) => prod.id === idProduct);

    const productosLs = JSON.parse(localStorage.getItem("productos"));
    const productoActual = productosLs.find((prod) => prod?.id === idProduct);

    console.log(productoExiste);
    if (productoExiste) {
      Swal.fire({
        icon: "warning",
        title: "Producto ya cargado en el carrito",
        text: "Podras modificar la cantidad en la seccion del carrito",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Producto cargado al carrito con exito",
      });
      carritoLs.push(productoActual);
      localStorage.setItem("carrito", JSON.stringify(carritoLs));
    }
  };

  useEffect(() => {
    obtenerFavoritos();
  }, []);
  return (
    <>
      {favoritosUsuario.length ? (
        <Container className="my-5">
          <Row>
            {favoritosUsuario.map((fav, i) => (
              <Col sm="12" md="6" lg="4" key={i}>
                <Card>
                  <Card.Img variant="top" src={fav.image} />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {fav.title}
                    </Card.Title>
                    <Card.Text>${fav.price}</Card.Text>
                    <Card.Text className="text-truncate">
                      {fav.description}
                    </Card.Text>
                    <div>
                      <Button
                        variant="danger"
                        className="mx-3"
                        onClick={(ev) => deleteProductFav(ev, i)}
                      >
                        Eliminar
                      </Button>
                      <Button
                        variant="success"
                        className="mx-3"
                        onClick={(ev) => addProdCart(ev, fav.id)}
                      >
                        Agregar Carrito
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <h1 className="text-center my-5">
          No hay productos en esta seccion por el momento
        </h1>
      )}
    </>
  );
};

export default FavPage;
