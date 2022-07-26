import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FolderFile from "./FolderFile";

function ContainerFiles({ items }) {
	const uuid = () => {
		const time = new Date.Now();
		return time + Math.random;
	};

	return (
		<Container className="py-5">
			<Row className="text-center" xs={2} sm={3} md={4} lg={5} xl={6} xxl={8}>
				{items.map((item) => (
					<FolderFile key={uuid} path={item.path} item={item} />
				))}
			</Row>
		</Container>
	);
}

export default ContainerFiles;
