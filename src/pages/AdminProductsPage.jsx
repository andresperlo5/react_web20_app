import { Container } from "react-bootstrap";
import TableC from "../components/table/TableC";
import ModalC from "../components/modal/ModalC";
import { Link } from "react-router";

const AdminProductsPage = () => {
  return (
    <>
      <Link
        to="/admin-products/createEdit/create"
        className="btn btn-primary ms-3 mt-3"
      >
        Crear Producto Nuevo
      </Link>
      <div className="ms-3 mt-3">
        <ModalC />
      </div>
      <h2 className="text-center my-5">Todos los productos</h2>
      <Container className="my-5">
        <TableC />
      </Container>
    </>
  );
};

export default AdminProductsPage;
