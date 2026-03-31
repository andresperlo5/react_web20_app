import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const AdminCreateProductPage = () => {
  const idParams = useParams();
  const idProduct = Number(idParams.idProduct);

  const [formProd, setFormProd] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChangeCreateProduct = (ev) => {
    setFormProd({ ...formProd, [ev.target.name]: ev.target.value });
  };

  const handleClickCreateProduct = (ev) => {
    ev.preventDefault();
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
    console.log(productosLs);

    if (idProduct) {
      const indexProd = productosLs.findIndex((prod) => prod.id === idProduct);
      productosLs[indexProd] = formProd;

      localStorage.setItem("productos", JSON.stringify(productosLs));

      Swal.fire({
        title: "Producto editado con exito!",
        text: "En breve seras redirigido al panel de productos!",
        icon: "success",
      });

      setTimeout(() => {
        location.href = "/admin-products";
      }, 1000);
    } else {
      const nuevoIdProd = productosLs[productosLs.length - 1]?.id + 1 || 1;

      const nuevoProducto = {
        id: nuevoIdProd,
        ...formProd,
      };

      productosLs.push(nuevoProducto);

      localStorage.setItem("productos", JSON.stringify(productosLs));

      Swal.fire({
        title: "Producto creado con exito!",
        text: "En breve seras redirigido al panel de productos!",
        icon: "success",
      });

      setTimeout(() => {
        location.href = "/admin-products";
      }, 1000);
    }
  };

  const obtenerDatosDelProductoEditar = () => {
    const productosLs = JSON.parse(localStorage.getItem("productos"));
    const productoEditar = productosLs.find(
      (producto) => producto.id === idProduct,
    );

    setFormProd(productoEditar);
  };

  useEffect(() => {
    if (idParams) obtenerDatosDelProductoEditar();
  }, []);

  return (
    <>
      <h2 className="text-center my-5">
        {idProduct ? "Editar Producto" : "Crear Nuevo Producto"}
      </h2>

      <Container className="d-flex justify-content-center">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              name="title"
              value={formProd?.title}
              type="text"
              placeholder="Enter email"
              onChange={handleChangeCreateProduct}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="price"
              value={formProd?.price}
              type="text"
              placeholder="Enter email"
              onChange={handleChangeCreateProduct}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              name="description"
              value={formProd?.description}
              type="text"
              placeholder="Enter email"
              onChange={handleChangeCreateProduct}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="image"
              value={formProd?.image}
              type="text"
              placeholder="Enter email"
              onChange={handleChangeCreateProduct}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              onClick={handleClickCreateProduct}
            >
              {idProduct ? "Guardar Cambios" : "Crear Producto"}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AdminCreateProductPage;
