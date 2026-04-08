import { Container, Row } from "react-bootstrap";
import FormC from "../components/form/FormC";
import { useEffect } from "react";
import { useChangeTitlePage } from "../helpers/changeTitle";

const LoginPage = () => {
  useEffect(() => {
    useChangeTitlePage("login");
  }, []);
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <FormC idPage="login" />
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
