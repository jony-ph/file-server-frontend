import { forwardRef, useState } from 'react';
import { useAppContext } from '../store/store';

import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdFileDownload } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';

import styles from '../styles/menuFile.module.css';

const FileMenu = ({ path, name, item }) => {

  const downloadURL = `http://192.168.0.6:4000/download${path}`;

  const [show, setShow] = useState();
  const [newName, setNewName] = useState(name);

  const { items, setItems } = useAppContext();

  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <button
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

  const handleFormShow = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const url = `http://192.168.0.6:4000/rename${path}`;
    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        newName
      })
    }

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    updateName();

  };

  const updateName = () => {
    const index = items.findIndex( i => i.path === item.path);
    const temp = [...items];

    const pathname = path.split('/').slice(0, -1).join('/');
    temp[index].path = pathname + "/" + newName;

    setItems(temp);
  };

  const handleClick = async () => {


    const option = window.confirm("Confirma la eliminación?");

    if (!option)
      return;
    
    const url = `http://192.168.0.6:4000/delete${path}`;
    const options = {
      method: 'DELETE'
    }

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    deleteItem();

  };

  const deleteItem = () => {
    const temp = items.filter( i => i.path !== item.path);
    setItems(temp);
  };

  return ( 
    <>
      <Dropdown align="end">
        <Dropdown.Toggle as={CustomToggle}>
        </Dropdown.Toggle>

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
            <Button variant="secondary" onClick={handleFormShow} className="ms-auto">
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