import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
	return (
		<Form className="my-5 mx-lg-5 mx-md-3 mx-sm-0">
			<Form.Floating className="mb-3">
				<Form.Control type="email" id="email" placeholder="name@example.com" />
				<Form.Label htmlFor="email">Correo electrónico</Form.Label>
			</Form.Floating>

			<Form.Floating className="mb-3">
				<Form.Control type="password" id="password" placeholder="********" />
				<Form.Label htmlFor="password">Contraseña</Form.Label>
			</Form.Floating>

			<Button
				variant="outline-dark"
				size="lg"
				type="submit"
				className="w-100 my-4"
			>
				Iniciar sesión
			</Button>
		</Form>
	);
}

export default LoginForm;
