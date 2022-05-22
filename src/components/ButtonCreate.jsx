import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsFolderPlus } from "react-icons/bs";

import { useLocation } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';
import { useAppContext } from '../store/store';

const ButtonCreate = () => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const { pathname } = useLocation();


  // Importando contexto
  const store = useAppContext();

  function handleShow() {
    setShow(!show);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const path = pathname + '/' + name;

    const newFolder = {
      id: crypto.randomUUID(),
      name: path
    };

    store.createItem(newFolder);
  }

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
                placeholder="Nombre de la carpeta"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" onClick={handleShow} className="ms-auto">
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