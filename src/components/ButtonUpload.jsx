import { useState } from "react";
import { useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { BsUpload } from "react-icons/bs";
import { useAppContext } from "../store/store";

function ButtonUpload() {
	const { pathname } = useLocation();

	const [show, setShow] = useState(false);
	const [uploadFiles, setUploadFiles] = useState(null);

	const { items, setItems } = useAppContext();

	const handleShow = () => {
		setShow(!show);
	};

	const upload = async (file) => {
		const dataForm = new FormData();
		dataForm.append("path", pathname);
		dataForm.append("file", file);

		const url = "http://https://file-server-backend.herokuapp.com:4000/upload";
		const options = {
			method: "POST",
			body: dataForm,
		};

		const response = await fetch(url, options);
		const data = await response.json();

		return data;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const temp = [...items];
		const totalFiles = uploadFiles.length;

		for (let i = 0; i < totalFiles; i += 1) {
			const response = upload(uploadFiles[i]);
			const path = `${pathname}/${uploadFiles[i].name}`;
			const item = { path, isFile: true };

			if (response.message === "File already exist") return;

			temp.push(item);
		}

		setItems(await Promise.all(temp));
	};

	const handleChange = (e) => {
		const inputFile = e.target;
		const { files } = inputFile;

		setUploadFiles(files);
	};

	return (
		<>
			<Button variant="primary" className="px-4" onClick={handleShow}>
				Subir &nbsp;&nbsp;
				<BsUpload />
			</Button>

			<Modal show={show} onHide={handleShow} className="text-dark" centered>
				<Modal.Body>
					<Form onSubmit={handleSubmit} encType="multipart/form-data">
						<Form.Group className="mb-3">
							<Form.Label>Subir archivos</Form.Label>
							<Form.Control
								type="file"
								name="file"
								onChange={handleChange}
								multiple
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

export default ButtonUpload;
