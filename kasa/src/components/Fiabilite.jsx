import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Fiabilite() {
	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Fiabbilité</h2>
				<img className="Vector" src={vector} alt="Fleche" />
			</div>
			<p className="MenuHide">
				Les annonces postées sur Kasa garantissent une fiabilité totale. Les
				photos sont conformes aux logements, et toutes les informations sont
				régulièrement vérifiées par nos équipes.
			</p>
		</div>
	);
}

export default Fiabilite;
