import { useEffect, useState } from "react";
import CardC from "../components/card/CardC";
import CarouselC from "../components/carousel/CarouselC";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductosFakeStore = async () => {
    const productosApi = await fetch("https://fakestoreapi.com/products");
    const productosFS = await productosApi.json();
    localStorage.setItem("productos", JSON.stringify(productosFS));
    setProductos(productosFS);
  };

  // ciclos de vida de un componente
  //inicializa - monta - actualiza - desmonta

  //componente se inicializa y se monta
  useEffect(() => {
    obtenerProductosFakeStore();
  }, []);

  //componente se actualiza
  /*    useEffect(() => {
      obtenerProductosFakeStore();
    }, [productos, todos los estados que uds quieran]); */

  //componente se desmonta

  /*       useEffect(() => {
       return(
       () => {
          }
       )
      }, []); */

  const productosMap = productos.map((producto) => (
    <Col key={producto.id} sm="12" md="6" lg="3">
      <CardC
        image={producto.image}
        title={producto.title}
        price={producto.price}
        description={producto.description}
      />
    </Col>
  ));

  return (
    <>
      <CarouselC />

      <main>
        <h2 className="text-center my-5">Nuestros Productos</h2>
        <Container>
          <Row>{productosMap}</Row>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
