import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import { FaFolder } from "react-icons/fa";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import FileMenu from "./FileMenu";

import styles from "../styles/folderFile.module.css";

function FolderFile({ path, item }) {
	let pathname = path;
	if (item.isFile) pathname = `/preview${path}`;

	const name = path.substring(path.lastIndexOf("/") + 1);
	let displayName = name;

	if (name.length >= 25) displayName = `${name.slice(0, 25)}...`;

	return (
		<Col className="user-select-none d-flex">
			<div className="flex-grow-1">
				<Link to={pathname} className={styles.link}>
					{item.isFile ? (
						<BsFileEarmarkArrowDownFill className={styles.file} />
					) : (
						<FaFolder className={styles.folder} />
					)}
					<div className="text-center">{displayName}</div>
				</Link>
			</div>
			<FileMenu path={path} name={name} item={item} />
		</Col>
	);
}

export default FolderFile;
