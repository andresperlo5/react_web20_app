import { useEffect, useState } from "react";
import CardC from "../components/card/CardC";
import CarouselC from "../components/carousel/CarouselC";

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductosFakeStore = async () => {
    const productosApi = await fetch("https://fakestoreapi.com/products");
    const productos = await productosApi.json();
    localStorage.setItem("productos", JSON.stringify(productos));
    setProductos(productos);
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

  return (
    <>
      <CarouselC />

      <main>
        <h2 className="text-center my-5">Nuestros Productos</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <CardC />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
