import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";

// function NavigationBar({ navbarFlag }) {
function NavigationBar() {
	const [width, setWidth] = useState(window.innerWidth);

	const homeIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor"
			width={30}
		>
			<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
		</svg>
	);

	const settingsIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor"
			width={30}
		>
			<path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
		</svg>
	);

	const filesIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor"
			width={30}
		>
			<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
		</svg>
	);

	function setSize() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", setSize);

		return () => {
			window.removeEventListener("resize", setSize);
		};
	});

	// No mostrar navbar
	// if (!navbarFlag) {
	// 	return null;
	// }

	return (
		<Navbar bg="dark" variant="dark" fixed={width < 1000 ? "bottom" : "top"}>
			<Container>
				<Nav className="m-auto">
					<div className="mx-4 my-2">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? styles.active : styles.link
							}
						>
							{width < 1000 ? homeIcon : "Inicio"}
						</NavLink>
					</div>
					<div className="mx-4 my-2">
						<NavLink
							to="/files"
							className={({ isActive }) =>
								isActive ? styles.active : styles.link
							}
						>
							{width < 1000 ? filesIcon : "Archivos"}
						</NavLink>
					</div>
					<div className="mx-4 my-2">
						<NavLink
							to="/settings"
							className={({ isActive }) =>
								isActive ? styles.active : styles.link
							}
						>
							{width < 1000 ? settingsIcon : "Configuraciones"}
						</NavLink>
					</div>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
