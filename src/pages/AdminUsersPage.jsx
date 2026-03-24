import { Container } from "react-bootstrap";
import TableC from "../components/table/TableC";

const AdminUsersPage = () => {
  return (
    <>
      <h2 className="text-center my-5">Todos los usuarios</h2>
      <Container className="my-5">
        <TableC idPage="adminUsersPage" />
      </Container>
    </>
  );
};

export default AdminUsersPage;
