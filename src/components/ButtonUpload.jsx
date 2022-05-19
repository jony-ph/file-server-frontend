import Button from "react-bootstrap/Button";
import { BsUpload } from "react-icons/bs";

const ButtonUpload = () => {
  return ( 
    <Button variant="primary" className="px-4">Subir &nbsp;&nbsp;<BsUpload /> </Button>
  );
}
 
export default ButtonUpload;