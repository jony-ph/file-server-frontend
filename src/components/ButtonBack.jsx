import { BiArrowBack } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";

function ButtonBack() {
	const { pathname } = useLocation();

	const currentPath = pathname.substring(pathname.lastIndexOf("/"));
	const goBack = pathname.replace(currentPath, "");

	if (pathname !== "/files") {
		return (
			<div className="mx-3">
				<Link to={goBack}>
					<BiArrowBack size={30} color="white" />
				</Link>
			</div>
		);
	}
}

export default ButtonBack;
