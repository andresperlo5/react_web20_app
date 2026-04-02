import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Swal from "sweetalert2";

const ModalC = ({ idPage, usuario, obtenerUsuarios }) => {
  const [usuarioMod, setUsuarioMod] = useState(usuario);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeRolUser = (ev) => {
    setUsuarioMod({ ...usuarioMod, [ev.target.name]: ev.target.value });
  };

  const handleClickRolUser = (ev) => {
    ev.preventDefault();
    console.log(usuarioMod.rolUsuario);
    if (
      usuarioMod.rolUsuario !== "usuario" &&
      usuarioMod.rolUsuario !== "admin"
    ) {
      console.log("if");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rol incorrecto. Solo se puede elegir entre: USUARIO y ADMIN!",
      });

      return;
    }

    const usuariosLs = JSON.parse(localStorage.getItem("usuarios"));
    const indexUser = usuariosLs.findIndex((user) => user.id === usuario.id);

    usuariosLs[indexUser] = usuarioMod;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    Swal.fire({
      title: "Cambios realizados con exito!",
      icon: "success",
    });

    handleClose();
    obtenerUsuarios();
  };

  return (
    <>
      <Button
        variant={idPage === "tableUser" ? "outline-success" : "primary"}
        onClick={handleShow}
      >
        {idPage === "tableUser" ? "Editar" : "Crear Producto Nuevo (Modal)"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {usuarioMod?.nombreUsuario}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre del Usuario</Form.Label>
              <Form.Control
                disabled={idPage === "tableUser" ? true : false}
                type="email"
                placeholder="Enter email"
                value={usuarioMod?.nombreUsuario}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo del Usuario</Form.Label>
              <Form.Control
                disabled={idPage === "tableUser" ? true : false}
                type="email"
                placeholder="Enter email"
                value={usuarioMod?.correoUsuario}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Rol del Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="rolUsuario"
                value={usuarioMod?.rolUsuario}
                onChange={handleChangeRolUser}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                className="w-50"
                variant="primary"
                type="submit"
                onClick={handleClickRolUser}
              >
                Guardar Cambios
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalC;
