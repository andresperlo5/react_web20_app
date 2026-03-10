import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormC = ({ idPage }) => {
  //Estados 
  let formulario = {}

  const handleChangeRegister = (ev) => {
    formulario = {
      [ev.target.name]: ev.target.value
    }
  }

  const handleClickBottomRegister = (ev) => {
    ev.preventDefault()
    console.log(formulario)

  }


  return (
    <>
      {
        idPage === "login"
          ?
          <Form className='w-25'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Container className='d-flex justify-content-center'>
              <Button variant="primary" type="submit" className='w-75'>
                Ingresar
              </Button>
            </Container>
          </Form>

          :

          <Form className='w-25'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" name='nombreUsuario' placeholder="Enter email" onChange={handleChangeRegister} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo del Usuario</Form.Label>
              <Form.Control type="email" name="correoUsuario" placeholder="Enter email" onChange={handleChangeRegister} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name='contrasenia' placeholder="Enter email" onChange={handleChangeRegister} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control type="password" name='repContrasenia' placeholder="Password" onChange={handleChangeRegister} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Aceptar terminos y condiciones" onChange={handleChangeRegister} name='checkUsuario' />
            </Form.Group>
            <Container className='d-flex justify-content-center'>
              <Button variant="primary" type="submit" className='w-75' onClick={handleClickBottomRegister}>
                Enviar Datos
              </Button>
            </Container>
          </Form>

      }

    </>
  )
}

export default FormC