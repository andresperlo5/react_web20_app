import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const FormC = ({ idPage }) => {
  // ---------------- STATES ----------------
  const [formulario, setFormulario] = useState({
    nombreUsuario: "",
    correoUsuario: "",
    contrasenia: "",
    repContrasenia: "",
    checkUsuario: false,
    rolUsuario: "usuario",
    login: false,
    bloqueo: true,
  });

  const [formLog, setFormLog] = useState({
    nombreUsuario: "",
    contrasenia: "",
  });

  const [erroresRegister, setErroresRegister] = useState({});
  const [erroresLogin, setErroresLogin] = useState({});

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getClass = (error, value) => {
    if (error) return "is-invalid";
    if (value) return "is-valid";
    return "";
  };

  const handleChangeRegister = (ev) => {
    const { name, value, type, checked } = ev.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });

    setErroresRegister({
      ...erroresRegister,
      [name]: "",
    });
  };

  const handleChangeLogin = (ev) => {
    const { name, value } = ev.target;

    setFormLog({ ...formLog, [name]: value });

    setErroresLogin({
      ...erroresLogin,
      [name]: "",
    });
  };

  const handleClickBottomRegister = (ev) => {
    ev.preventDefault();

    let errores = {};

    if (!formulario.nombreUsuario) {
      errores.nombreUsuario = "Campo obligatorio";
    }

    if (!formulario.correoUsuario) {
      errores.correoUsuario = "Campo obligatorio";
    } else if (!validarEmail(formulario.correoUsuario)) {
      errores.correoUsuario = "Email inválido";
    }

    if (!formulario.contrasenia) {
      errores.contrasenia = "Campo obligatorio";
    } else if (formulario.contrasenia.length < 8) {
      errores.contrasenia = "Mínimo 8 caracteres";
    }

    if (!formulario.repContrasenia) {
      errores.repContrasenia = "Campo obligatorio";
    } else if (formulario.contrasenia !== formulario.repContrasenia) {
      errores.repContrasenia = "Las contraseñas no coinciden";
    }

    if (!formulario.checkUsuario) {
      errores.checkUsuario = "Debes aceptar los términos";
    }

    setErroresRegister(errores);

    if (Object.keys(errores).length > 0) return;

    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

    Swal.fire({
      title: "Registro Exitoso!",
      icon: "success",
    });

    usuariosLs.push({
      id: usuariosLs[usuariosLs.length - 1]?.id + 1 || 1,
      ...formulario,
    });

    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    setFormulario({
      nombreUsuario: "",
      correoUsuario: "",
      contrasenia: "",
      repContrasenia: "",
      checkUsuario: false,
      rolUsuario: "usuario",
      login: false,
      bloqueo: false,
    });
    setErroresRegister({});
  };

  const handleClickBottomLog = (ev) => {
    ev.preventDefault();

    let errores = {};

    if (!formLog.nombreUsuario) {
      errores.nombreUsuario = "Campo obligatorio";
    }

    if (!formLog.contrasenia) {
      errores.contrasenia = "Campo obligatorio";
    }

    setErroresLogin(errores);

    if (Object.keys(errores).length > 0) return;

    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuariosLs.find(
      (u) => u.nombreUsuario === formLog.nombreUsuario,
    );

    if (!usuarioExiste || usuarioExiste.contrasenia !== formLog.contrasenia) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrectos",
      });
      return;
    }

    if (usuarioExiste.bloqueo) {
      Swal.fire({
        icon: "error",
        title: "Usuario bloqueado",
      });
      return;
    }

    usuarioExiste.login = true;

    sessionStorage.setItem("usuarioLog", JSON.stringify(usuarioExiste));

    setFormLog({
      nombreUsuario: "",
      contrasenia: "",
    });
    setErroresLogin({});

    location.href =
      usuarioExiste.rolUsuario === "admin" ? "/home-admin" : "/home-user";
  };

  const loginForm = (
    <Form className="w-25">
      <Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          name="nombreUsuario"
          onChange={handleChangeLogin}
          className={getClass(
            erroresLogin.nombreUsuario,
            formLog.nombreUsuario,
          )}
        />
        <Form.Control.Feedback type="invalid">
          {erroresLogin.nombreUsuario}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="contrasenia"
          onChange={handleChangeLogin}
          className={getClass(erroresLogin.contrasenia, formLog.contrasenia)}
        />
        <Form.Control.Feedback type="invalid">
          {erroresLogin.contrasenia}
        </Form.Control.Feedback>
      </Form.Group>

      <Container className="d-flex justify-content-center">
        <Button className="w-75" onClick={handleClickBottomLog}>
          Ingresar
        </Button>
      </Container>
    </Form>
  );

  const registerForm = (
    <Form className="w-25">
      <Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          name="nombreUsuario"
          value={formulario.nombreUsuario}
          onChange={handleChangeRegister}
          className={getClass(
            erroresRegister.nombreUsuario,
            formulario.nombreUsuario,
          )}
        />
        <Form.Control.Feedback type="invalid">
          {erroresRegister.nombreUsuario}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="correoUsuario"
          value={formulario.correoUsuario}
          onChange={handleChangeRegister}
          className={getClass(
            erroresRegister.correoUsuario,
            formulario.correoUsuario,
          )}
        />
        <Form.Control.Feedback type="invalid">
          {erroresRegister.correoUsuario}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="contrasenia"
          value={formulario.contrasenia}
          onChange={handleChangeRegister}
          className={getClass(
            erroresRegister.contrasenia,
            formulario.contrasenia,
          )}
        />
        <Form.Control.Feedback type="invalid">
          {erroresRegister.contrasenia}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Repetir contraseña</Form.Label>
        <Form.Control
          type="password"
          name="repContrasenia"
          value={formulario.repContrasenia}
          onChange={handleChangeRegister}
          className={getClass(
            erroresRegister.repContrasenia,
            formulario.repContrasenia,
          )}
        />
        <Form.Control.Feedback type="invalid">
          {erroresRegister.repContrasenia}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Aceptar términos"
          name="checkUsuario"
          onChange={handleChangeRegister}
          isInvalid={erroresRegister.checkUsuario}
        />
        <Form.Control.Feedback type="invalid">
          {erroresRegister.checkUsuario}
        </Form.Control.Feedback>
      </Form.Group>

      <Container className="d-flex justify-content-center">
        <Button className="w-75" onClick={handleClickBottomRegister}>
          Registrarse
        </Button>
      </Container>
    </Form>
  );

  return <>{idPage === "login" ? loginForm : registerForm}</>;
};

export default FormC;
