import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { BsSearch } from "react-icons/bs";

function Searcher() {
	return (
		<InputGroup className="my-5">
			<FormControl
				placeholder="Carpeta o archivo"
				aria-label="Carpeta o archivo"
				aria-describedby="basic-addon2"
			/>
			<Button variant="secondary" id="button-addon2">
				<BsSearch />
			</Button>
		</InputGroup>
	);
}

export default Searcher;
