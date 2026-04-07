import { useNavigate } from "react-router";

const PrivateRoute = ({ children, rolRuta }) => {
  const navigate = useNavigate();
  const usuarioLog = JSON.parse(sessionStorage.getItem("usuarioLog")) || null;

  if (!usuarioLog) {
    setTimeout(() => {
      navigate("/");
    }, 100);
  } else if (usuarioLog.rolUsuario === rolRuta) {
    return children;
  } else if (usuarioLog.rolUsuario === "usuario") {
    setTimeout(() => {
      navigate("/home-user");
    }, 100);
  } else {
    return children;
  }
};

export default PrivateRoute;
