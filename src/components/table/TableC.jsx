import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

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
        <button className="btn btn-outline-danger">Eliminar</button>
        <button className="btn btn-outline-success">Editar</button>
        <button className="btn btn-outline-info">Destacar</button>
        <button className="btn btn-outline-warning">Bloquear</button>
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
