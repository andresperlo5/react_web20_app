import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const NavbarC = () => {
  const homeAdmin = location.href.split("/")[3] || null;
  const usuarioLog = JSON.parse(sessionStorage.getItem("usuarioLog"));

  const cerrarSesionUsuario = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios"));

    const indexUser = usuariosLs.findIndex(
      (usuario) => usuario.nombreUsuario === usuarioLog.nombreUsuario,
    );
    usuarioLog.login = false;

    usuariosLs[indexUser] = usuarioLog;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    Swal.fire({
      title: "Sesion Cerrada!",
      text: "Esperamos que vuelvas pronto!",
      icon: "success",
    });

    sessionStorage.removeItem("usuarioLog");

    location.href = "/";
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavLink
            className="nav-link"
            to={
              usuarioLog?.rolUsuario === "admin"
                ? "/home-admin"
                : usuarioLog?.rolUsuario === "usuario"
                  ? "home-user"
                  : "/"
            }
          >
            Logo
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {usuarioLog?.rolUsuario === "admin" ? (
              <Nav className="ms-auto">
                <NavLink
                  className="nav-link"
                  to={usuarioLog?.rolUsuario === "admin" ? "/home-admin" : "/"}
                >
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/admin-users">
                  Panel Usuarios
                </NavLink>
                <NavLink className="nav-link" to="/admin-products">
                  Panel Productos
                </NavLink>
              </Nav>
            ) : usuarioLog?.rolUsuario === "usuario" ? (
              <Nav className="ms-auto">
                <NavLink
                  className="nav-link"
                  to={usuarioLog?.rolUsuario === "usuario" ? "/home-user" : "/"}
                >
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/user-fav">
                  Favoritos
                </NavLink>
                <NavLink className="nav-link" to="/user-cart">
                  Carrito
                </NavLink>
                <NavLink className="nav-link" to="/user-galery">
                  Galeria
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contacto
                </NavLink>
                <NavLink className="nav-link" to="/aboutUs">
                  Sobre Nosotros
                </NavLink>
              </Nav>
            )}
            {usuarioLog?.rolUsuario === "admin" ||
            usuarioLog?.rolUsuario === "usuario" ? (
              <Nav className="ms-auto">
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={cerrarSesionUsuario}
                >
                  Cerrar Sesion
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesion
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Registrarse
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
