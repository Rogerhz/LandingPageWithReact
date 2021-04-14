import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Menu = () => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			className="m-auto justify-content-between">
			<Navbar.Brand>Start Boopstrap</Navbar.Brand>
			<Nav>
				<Nav.Link>Home</Nav.Link>
				<Nav.Link>About</Nav.Link>
				<Nav.Link>Servises</Nav.Link>
				<Nav.Link>Contact</Nav.Link>
			</Nav>
		</Navbar>
	);
};
