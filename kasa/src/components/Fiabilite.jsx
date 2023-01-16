import { useState } from "react";
import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Fiabilite() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Fiabbilité</h2>
				<button className="ButtonMenu" onClick={() => setToggle(!toggle)}>
					{toggle ? (
						<img className="Vector" src={vector} alt="Fleche" />
					) : (
						<img className="Vector180" src={vector} alt="Fleche" />
					)}
				</button>
			</div>
			{toggle && (
				<p className="MenuHide">
					Les annonces postées sur Kasa garantissent une fiabilité totale. Les
					photos sont conformes aux logements, et toutes les informations sont
					régulièrement vérifiées par nos équipes.
				</p>
			)}
		</div>
	);
}

export default Fiabilite;
