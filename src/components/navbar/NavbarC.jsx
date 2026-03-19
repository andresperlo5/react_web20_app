import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";

const NavbarC = () => {
  const homeAdmin = location.href.split("/")[3];

  const cerrarSesionUsuario = () => {
    const usuarioLog = JSON.parse(sessionStorage.getItem("usuarioLog"));
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
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {homeAdmin ? (
              <Nav className="ms-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/contact">Panel Usuarios</Nav.Link>
                <Nav.Link href="/aboutUs">Panel Productos</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/contact">Contacto</Nav.Link>
                <Nav.Link href="/aboutUs">Sobre Nosotros</Nav.Link>
              </Nav>
            )}
            {homeAdmin ? (
              <Nav className="ms-auto">
                <Nav.Link href="#" onClick={cerrarSesionUsuario}>
                  Cerrar Sesion
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
                <Nav.Link href="/register">Registrarse</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
