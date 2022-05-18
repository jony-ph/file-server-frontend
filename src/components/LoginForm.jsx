import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return ( 

    <Form className="my-5 mx-lg-5 mx-md-3 mx-sm-0">
      <Form.Floating className="mb-3">
        <Form.Control type="email" id="email" placeholder="name@example.com" />
        <label htmlFor="email">Correo electrónico</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control type="password" id="password" placeholder="********" />
        <label htmlFor="password">Contraseña</label>
      </Form.Floating>
      
      <Button variant="outline-dark" size="lg" type="submit" className="w-100 my-4">
        Iniciar sesión
      </Button>
    </Form>
    
  );
}
 
export default LoginForm;