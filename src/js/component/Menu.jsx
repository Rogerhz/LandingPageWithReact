import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Menu = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand>React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="d-flex ml-auto">
					<NavDropdown.Item className="text-light">
						Home
					</NavDropdown.Item>
					<NavDropdown.Item className="text-light">
						About
					</NavDropdown.Item>
					<NavDropdown.Item className="text-light">
						Services
					</NavDropdown.Item>
					<NavDropdown.Item className="text-light">
						Contact
					</NavDropdown.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
