import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../store/store";

const useFiles = (pathname) => {
	const { items, setItems } = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		async function getItems() {
			try {
				const url = `https://file-server-backend.herokuapp.com${pathname}`;
				const response = await fetch(url);
				const data = await response.json();

				if (data.message === "Folder doesn't exist") {
					navigate("/files");
					return;
				}

				setItems(data);
			} catch (error) {
				// console.log(error);
			}
		}

		getItems();
	}, [pathname, setItems, navigate]);

	return items;
};

export default useFiles;
