import { useState } from "react";
import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Respect() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Respect</h2>
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
					La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
					comportement discriminatoire ou de perturbation du voisinage
					entraînera une exclusion de notre plateforme.
				</p>
			)}
		</div>
	);
}

export default Respect;
