import { Container, Row } from "react-bootstrap"
import FormC from "../components/form/FormC"

const LoginPage = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <FormC idPage="login" />
        </Row>
      </Container>
    </>
  )
}

export default LoginPage