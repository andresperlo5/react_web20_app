import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const CartPage = () => {
  const [carritoUsuario, setCarritoUsuario] = useState([]);

  const obtenerCarritoUsuario = () => {
    const carritoLs = JSON.parse(localStorage.getItem("carrito"));
    setCarritoUsuario(carritoLs);
  };

  const deleteProdCart = (ev, i) => {
    ev.preventDefault();

    Swal.fire({
      title:
        "Estas seguro de que quieres eliminar a este producto del Carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Estoy seguro!",
      cancelButtonText: "No!",
    }).then((result) => {
      if (result.isConfirmed) {
        const carritoLs = JSON.parse(localStorage.getItem("carrito"));
        carritoLs.splice(i, 1);
        localStorage.setItem("carrito", JSON.stringify(carritoLs));

        Swal.fire({
          title: "El producto fue eliminado del Carrito!",
          icon: "success",
        });

        obtenerCarritoUsuario();
      }
    });
  };

  useEffect(() => {
    obtenerCarritoUsuario();
  }, []);
  return (
    <>
      <Container className="my-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <td>Elimiar</td>
            </tr>
          </thead>
          <tbody>
            {carritoUsuario.map((producto, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{producto?.title}</td>
                <td>{producto?.price}</td>
                <td>precio * cantidad</td>
                <td>total</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(ev) => deleteProdCart(ev, i)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <p className="my-5">Total a pagar</p>
      </Container>
    </>
  );
};

export default CartPage;
