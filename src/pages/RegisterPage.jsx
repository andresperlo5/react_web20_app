import { Container, Row } from "react-bootstrap";
import FormC from "../components/form/FormC";
import { useEffect } from "react";
import { useChangeTitlePage } from "../helpers/changeTitle";

const RegisterPage = () => {
  useEffect(() => {
    useChangeTitlePage("register");
  }, []);
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <FormC />
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
