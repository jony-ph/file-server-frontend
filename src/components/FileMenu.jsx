import { forwardRef, useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdFileDownload } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";
import { useAppContext } from "../store/store";

import styles from "../styles/menuFile.module.css";

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
	<button
		type="button"
		className={styles.toggleMenu}
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
	>
		{children}
		<BiDotsVerticalRounded />
	</button>
));

function FileMenu({ path, name, item }) {
	const downloadURL = `https://file-server-backend.herokuapp.com/download${path}`;

	const [show, setShow] = useState();
	const [newName, setNewName] = useState(name);

	const { items, setItems } = useAppContext();

	const handleFormShow = () => {
		setShow(!show);
	};

	const handleChange = (e) => {
		setNewName(e.target.value);
	};

	const updateName = () => {
		const index = items.findIndex((i) => i.path === item.path);
		const temp = [...items];

		const pathname = path.split("/").slice(0, -1).join("/");
		temp[index].path = `${pathname}/${newName}`;

		setItems(temp);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const url = `https://file-server-backend.herokuapp.com/rename${path}`;
		const options = {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				newName,
			}),
		};

		const response = await fetch(url, options);
		const data = await response.json();

		if (data.message === "Renamed file") updateName();
	};

	const deleteItem = () => {
		const temp = items.filter((i) => i.path !== item.path);
		setItems(temp);
	};

	const handleClick = async () => {
		// const option = window.confirm("Confirma la eliminación?");

		// if (!option) return;

		const url = `https://file-server-backend.herokuapp.com/delete${path}`;
		const options = {
			method: "DELETE",
		};

		const response = await fetch(url, options);
		const data = await response.json();

		if (data.message === "Deleted file") deleteItem();
	};

	return (
		<>
			<Dropdown align="end">
				<Dropdown.Toggle as={CustomToggle} />

				<Dropdown.Menu className={styles.menu}>
					<Dropdown.Item href={downloadURL}>
						<MdFileDownload /> Descargar
					</Dropdown.Item>
					<Dropdown.Item onClick={handleFormShow}>
						<AiFillEdit /> Renombrar
					</Dropdown.Item>
					<Dropdown.Item onClick={handleClick}>
						<RiDeleteBinFill /> Eliminar
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>

			<Modal show={show} onHide={handleFormShow} className="text-dark" centered>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Renombrar</Form.Label>
							<Form.Control
								type="text"
								name="newName"
								value={newName}
								onChange={handleChange}
								placeholder="Nuevo nombre"
								multiple
							/>
						</Form.Group>

						<Stack direction="horizontal" gap={2}>
							<Button
								variant="secondary"
								onClick={handleFormShow}
								className="ms-auto"
							>
								Cancelar
							</Button>
							<Button variant="primary" type="submit" onClick={handleFormShow}>
								Guardar
							</Button>
						</Stack>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default FileMenu;
