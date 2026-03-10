import { Container, Row } from "react-bootstrap"
import FormC from "../components/form/FormC"

const RegisterPage = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <FormC />
        </Row>
      </Container>
    </>
  )
}

export default RegisterPage