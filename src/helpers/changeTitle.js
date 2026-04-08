export const useChangeTitlePage = (idPage) => {
  switch (idPage) {
    case "home":
      document.title = "Pagina Principal";
      break;
    case "contact":
      document.title = "Contacto";
      break;
    case "register":
      document.title = "Registro";
      break;
    case "login":
      document.title = "Iniciar sesion";
      break;
    case "homeAdmin":
      document.title = "Pagina Principal: Administrador";
      break;
    case "adminProducts":
      document.title = "Panel Productos";
      break;
    case "adminUsers":
      document.title = "Panel Usuarios";
      break;
    case "homeUser":
      document.title = "Pagina Principal: Usuario";
      break;
    case "userFav":
      document.title = "Seccion de Favoritos";
      break;
    case "userCart":
      document.title = "Carrito de Compra";
      break;

    default:
      document.title = "Error 404: Pagina no encontrada";
      break;
  }
};
