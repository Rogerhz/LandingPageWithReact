import React from "react";
import { Menu } from "./Menu.jsx";
import { JumbotronS } from "./JumbotronS.jsx";
import { Cards } from "./Cards.jsx";
import { FooterPage } from "./FooterPage.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Menu />
			<div className="container">
				<JumbotronS />
				<Cards />
			</div>
			<FooterPage />
		</>
	);
}
