import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return ( 

    <Form className="my-5 mx-lg-5 mx-md-3 mx-sm-0">
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      
      <Button variant="outline-dark" size="lg" type="submit" className="w-100 my-4">
        Iniciar sesión
      </Button>
    </Form>
    
  );
}
 
export default LoginForm;