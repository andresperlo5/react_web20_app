import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const FormC = ({ idPage }) => {
  //Estados
  const [formulario, setFormulario] = useState({
    nombreUsuario: "",
    correoUsuario: "",
    contrasenia: "",
    repContrasenia: "",
    checkUsuario: false,
    rolUsuario: "usuario",
    login: false,
    bloqueo: false,
  });

  const [formLog, setFormLog] = useState({
    nombreUsuario: "",
    contrasenia: "",
  });

  /*  
   const [nombreUsuario, setNombreUsuario] = useState("");
  const [emailUsuario, setEmailUsuarioo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [repContrasenia, setRepContrasenia] = useState("");
  const [checkUsuario, setCheckUsuario] = useState(false); */

  const handleChangeRegister = (ev) => {
    setFormulario({
      ...formulario,
      [ev.target.name]:
        ev.target.type === "checkbox" ? ev.target.checked : ev.target.value,
    });
  };

  const handleClickBottomRegister = (ev) => {
    ev.preventDefault();

    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

    const {
      nombreUsuario,
      emailUsuairo,
      contrasenia,
      repContrasenia,
      checkUsuario,
    } = formulario;

    if (contrasenia && repContrasenia && contrasenia === repContrasenia) {
      Swal.fire({
        title: "Registro Exitoso!",
        text: "En breve seras redirigido a iniciar tu sesion!",
        icon: "success",
      });

      usuariosLs.push({
        id: usuariosLs[usuariosLs.length - 1]?.id + 1 || 1,
        ...formulario,
      });

      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
    }
  };

  const handleChangeLogin = (ev) => {
    setFormLog({ ...formLog, [ev.target.name]: ev.target.value });
  };

  const handleClickBottomLog = (ev) => {
    ev.preventDefault();
    const { nombreUsuario, contrasenia } = formLog;
    console.log(formLog);
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios"));
    const indexUser = usuariosLs.findIndex(
      (usuario) => usuario.nombreUsuario === nombreUsuario,
    );

    const usuarioExiste = usuariosLs.find(
      (usuario) => usuario.nombreUsuario === nombreUsuario,
    );

    if (!usuarioExiste) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario y/o contraseña no coinciden. USUARIO",
      });

      return;
    }

    if (usuarioExiste.contrasenia !== contrasenia) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario y/o contraseña no coinciden. CONTRASEÑA",
      });

      return;
    }

    if (usuarioExiste.bloqueo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario bloqueado debes comunicarte con un administrador",
      });
      return;
    }

    usuarioExiste.login = true;

    sessionStorage.setItem("usuarioLog", JSON.stringify(usuarioExiste));
    usuariosLs[indexUser] = usuarioExiste;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    if (usuarioExiste.rolUsuario === "admin") {
      location.href = "/home-admin";
    } else {
      location.href = "/home-user";
    }
  };

  return (
    <>
      {idPage === "login" ? (
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="nombreUsuario"
              onChange={handleChangeLogin}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="contrasenia"
              placeholder="Enter email"
              onChange={handleChangeLogin}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Container className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="w-75"
              onClick={handleClickBottomLog}
            >
              Ingresar
            </Button>
          </Container>
        </Form>
      ) : (
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              value={formulario.nombreUsuario}
              type="text"
              name="nombreUsuario"
              placeholder="Enter email"
              /* onChange={(ev) => setNombreUsuario(ev.target.value)} */
              onChange={handleChangeRegister}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo del Usuario</Form.Label>
            <Form.Control
              value={formulario.correoUsuario}
              type="email"
              name="correoUsuario"
              placeholder="Enter email"
              onChange={handleChangeRegister}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={formulario.contrasenia}
              name="contrasenia"
              placeholder="Enter email"
              onChange={handleChangeRegister}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={formulario.repContrasenia}
              name="repContrasenia"
              placeholder="Password"
              onChange={handleChangeRegister}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              value={formulario.checkUsuario}
              label="Aceptar terminos y condiciones"
              onChange={handleChangeRegister}
              name="checkUsuario"
            />
          </Form.Group>
          <Container className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="w-75"
              onClick={handleClickBottomRegister}
            >
              Enviar Datos
            </Button>
          </Container>
        </Form>
      )}
    </>
  );
};

export default FormC;
