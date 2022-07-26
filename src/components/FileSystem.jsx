import Stack from "react-bootstrap/Stack";
import ButtonBack from "./ButtonBack";
import Searcher from "./Searcher";
import ButtonCreate from "./ButtonCreate";
import ButtonUpload from "./ButtonUpload";

import ButtonOrder from "./ButtonOrder";

function FileSystem() {
	return (
		<div>
			<ButtonBack />
			<Searcher />
			<Stack direction="horizontal">
				<ButtonUpload />
				<ButtonCreate />
				<ButtonOrder className="ms-auto" />
			</Stack>
		</div>
	);
}

export default FileSystem;
