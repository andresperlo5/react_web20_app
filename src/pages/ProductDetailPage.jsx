import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const ProductDetailPage = () => {
  const idProductParams = useParams();
  const [producto, setProducto] = useState({});

  const obtenerProductoActual = () => {
    console.log(idProductParams);
    const productosLs = JSON.parse(localStorage.getItem("productos"));
    const productoActual = productosLs.find(
      (prod) => prod.id === Number(idProductParams.idProduct),
    );
    console.log(productoActual);
    setProducto(productoActual);
  };

  const handleClickCart = (ev) => {
    ev.preventDefault();
    const usuarioLog = sessionStorage.getItem("usuarioLog") || null;

    if (!usuarioLog) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes iniciar sesion para poder agregar este producto a tu carrito!",
      });

      setTimeout(() => {
        location.href = "/login";
      }, 1000);
    } else {
      const carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];
      const productoExiste = carritoLs.find(
        (prod) => prod.id === Number(idProductParams.idProduct),
      );
      console.log(idProductParams);
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
        carritoLs.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carritoLs));
      }
    }
  };

  const handleClickFav = (ev) => {
    ev.preventDefault();
    const usuarioLog = sessionStorage.getItem("usuarioLog") || null;

    if (!usuarioLog) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes iniciar sesion para poder agregar este producto a Favoritos!",
      });

      setTimeout(() => {
        location.href = "/login";
      }, 1000);
    } else {
      const favLs = JSON.parse(localStorage.getItem("fav")) || [];
      const productoExiste = favLs.find(
        (prod) => prod.id === Number(idProductParams.idProduct),
      );

      if (productoExiste) {
        Swal.fire({
          icon: "warning",
          title: "Producto ya cargado en Favoritos",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Producto cargado a Favoritos con exito",
        });
        favLs.push(producto);
        localStorage.setItem("fav", JSON.stringify(favLs));
      }
    }
  };

  useEffect(() => {
    obtenerProductoActual();
  }, []);
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col sm="12" md="6" className="text-center">
            <img className="w-50" src={producto?.image} alt="" />
          </Col>
          <Col sm="12" md="6">
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <p>{producto.description}</p>

            <div>
              <Button
                className="mx-3"
                variant="success"
                onClick={handleClickCart}
              >
                Añadir Carrito
              </Button>
              <Button
                className="mx-3"
                variant="danger"
                onClick={handleClickFav}
              >
                Añadir Favoritos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailPage;
