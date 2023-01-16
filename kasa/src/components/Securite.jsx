import { useState } from "react";
import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Securite() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Sécurité</h2>
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
					La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
					pour les voyageurs, chaque logement correspond aux critères de
					sécurité établis par nos services. En laissant une note aussi bien à
					l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
					standards sont bien respectés. Nous organisons également des ateliers
					sur la sécurité domestique pour nos hôtes.
				</p>
			)}
		</div>
	);
}

export default Securite;
