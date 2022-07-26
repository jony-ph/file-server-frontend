import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsFolderPlus } from "react-icons/bs";

import { useLocation } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useAppContext } from "../store/store";

function ButtonCreate() {
	const [show, setShow] = useState(false);
	const [name, setName] = useState("");

	const { pathname } = useLocation();

	// Importando contexto
	const { items, setItems } = useAppContext();

	const handleShow = () => {
		setShow(!show);
	};

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const path = `${pathname}/${name}`;
		const url = "https://file-server-backend.herokuapp.com:4000/create";
		const options = {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				path,
			}),
		};

		const response = await fetch(url, options);
		const data = await response.json();

		if (data.message === "Folder already exist") return;

		const item = { path, isFile: false };
		const temp = [...items];

		temp.push(item);
		setItems(temp);
	};

	return (
		<>
			<Button
				variant="outline-secondary"
				className="px-4 mx-4"
				onClick={handleShow}
			>
				Crear &nbsp;&nbsp; <BsFolderPlus />
			</Button>

			<Modal show={show} onHide={handleShow} className="text-dark" centered>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								name="path"
								placeholder="Nombre de la carpeta"
								onChange={handleChange}
								autoFocus
							/>
						</Form.Group>

						<Stack direction="horizontal" gap={2}>
							<Button
								variant="secondary"
								onClick={handleShow}
								className="ms-auto"
							>
								Cancelar
							</Button>
							<Button variant="primary" type="submit" onClick={handleShow}>
								Guardar
							</Button>
						</Stack>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ButtonCreate;
