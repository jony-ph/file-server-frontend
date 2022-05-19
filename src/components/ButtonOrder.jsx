import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { MdFilterListAlt } from "react-icons/md";

const ButtonOrder = ({ className }) => {
  return ( 
    <DropdownButton 
      id="dropdown-basic-button" 
      align="start"
      title={<MdFilterListAlt />} 
      variant="outline-light"
      className={className}
    > 

      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      
    </DropdownButton>
  );
}
 
export default ButtonOrder;