import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const TableC = ({ idPage }) => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const obtenerProductos = () => {
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(productosLs);
  };

  const obtenerUsuarios = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosLs);
  };

  const deleteOneProduct = (index) => {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar a este producto?",
      text: "Una vez eliminado nose podra volver a recuperar a la informacion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy muy seguro!",
      cancelButtonText: "No borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
        productosLs.splice(index, 1);
        localStorage.setItem("productos", JSON.stringify(productosLs));

        Swal.fire({
          title: "Eliminado!",
          text: "El producto fue eliminado con exito",
          icon: "success",
        });
      }
    });
  };

  const highlightOneProduct = (idProduct, i) => {
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
    const productoDestacar = productosLs.find(
      (producto) => producto.id === idProduct,
    );

    if (productoDestacar.destacar) {
      Swal.fire({
        title: "Este producto ya esta destacado!",
        icon: "warning",
      });

      /*  productoDestacar.destacar = false;
      localStorage.setItem("productos", JSON.stringify(productosLs)); */
    } else {
      const productoActualDestacado = productosLs.find(
        (producto) => producto.destacar,
      );

      if (productoActualDestacado) {
        Swal.fire({
          title: "Estas seguro de que quieres cambiar de producto DESTACADO",
          text: "Ya existe un producto destacado!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, estoy muy seguro!",
          cancelButtonText: "No borrar",
        }).then((result) => {
          if (result.isConfirmed) {
            productoDestacar.destacar = true;
            productoActualDestacado.destacar = false;

            localStorage.setItem("productos", JSON.stringify(productosLs));

            Swal.fire({
              title: "Producto destacado con exito!",
              icon: "success",
            });
          }
        });
      } else {
        productoDestacar.destacar = true;
        localStorage.setItem("productos", JSON.stringify(productosLs));

        Swal.fire({
          title: "Producto destacado con exito!",
          icon: "success",
        });
      }
    }
  };

  const deletePropHighlight = (idProduct) => {
    Swal.fire({
      title: "Estas seguro de quitar la propiedad especial de DESTACADO?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI!",
      cancelButtonText: "NO",
    }).then((result) => {
      const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
      const productoDestacado = productosLs.find(
        (producto) => producto.id === idProduct,
      );

      productoDestacado.destacar = false;

      localStorage.setItem("productos", JSON.stringify(productosLs));

      if (result.isConfirmed)
        Swal.fire({
          title: "Propiedad DESTACADO retirado con exito!",
          icon: "success",
        });
    });
  };

  const disabledEnabledOneProduct = (idProduct, i) => {
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
    const productoActualHabilitado = productosLs.find(
      (producto) => producto.id === idProduct,
    );

    Swal.fire({
      title: `Estas seguro de que quieres ${productoActualHabilitado.bloqueo ? "HABILITAR" : "DESHABILITAR"} este producto?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI!",
      cancelButtonText: "NO",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: `Producto ${productoActualHabilitado.bloqueo ? "DESHABILITADO" : "HABILITADO"} con exito!`,
          icon: "success",
        });
    });

    if (productoActualHabilitado.bloqueo) {
      productoActualHabilitado.bloqueo = false;
      localStorage.setItem("productos", JSON.stringify(productosLs));
    } else {
      productoActualHabilitado.bloqueo = true;
      localStorage.setItem("productos", JSON.stringify(productosLs));
    }
  };

  const theadTableProduct = (
    <tr>
      <th>ID</th>
      <th>Titulo</th>
      <th>Precio</th>
      <th>Descripcion</th>
      <th>Imagen</th>
      <th>Opciones</th>
    </tr>
  );

  const theadTableUser = (
    <tr>
      <th>ID</th>
      <th>Nombre de usuario</th>
      <th>Correo del usuario</th>
      <th>Rol del usuario</th>
      <th>Opciones</th>
    </tr>
  );

  const trTableProduct = productos.map((producto, i) => (
    <tr key={producto.id}>
      <td className="w-25">{i + 1}</td>
      <td className="w-75"> {producto.title}</td>
      <td>${producto.price}</td>
      <td className="w-25">
        <p>{producto.description}</p>
      </td>
      <td>
        <img className="w-100" src={producto.image} alt="" />
      </td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteOneProduct(i)}
        >
          Eliminar
        </button>
        <button className="btn btn-outline-success">Editar</button>
        {producto.destacar ? (
          <button
            className="btn btn-info"
            onClick={() => deletePropHighlight(producto.id, i)}
          >
            Quitar
          </button>
        ) : (
          <button
            className="btn btn-outline-info"
            onClick={() => highlightOneProduct(producto.id, i)}
          >
            Destacar
          </button>
        )}
        <button
          className="btn btn-outline-warning"
          onClick={() => disabledEnabledOneProduct(producto.id, i)}
        >
          {producto.bloqueo ? " Desbloquear" : " Bloquear"}
        </button>
      </td>
    </tr>
  ));

  const trTableUser = usuarios.map((usuario, i) => (
    <tr key={i}>
      <td className="w-25">{i + 1}</td>
      <td className="w-75"> {usuario.nombreUsuario}</td>
      <td>{usuario.correoUsuario}</td>
      <td className="w-25">
        <p>{usuario.rolUsuario}</p>
      </td>
      <td>
        <button className="btn btn-outline-danger">Eliminar</button>
        <button className="btn btn-outline-success">Editar</button>
        <button className="btn btn-outline-info">Destacar</button>
        <button className="btn btn-outline-warning">Bloquear</button>
      </td>
    </tr>
  ));

  useEffect(() => {
    if (idPage === "adminUsersPage") {
      obtenerUsuarios();
    } else {
      obtenerProductos();
    }
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          {idPage === "adminUsersPage" ? theadTableUser : theadTableProduct}
        </thead>
        <tbody>
          {idPage === "adminUsersPage" ? trTableUser : trTableProduct}
        </tbody>
      </Table>
    </>
  );
};

export default TableC;
