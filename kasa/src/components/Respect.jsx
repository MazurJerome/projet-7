import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Respect() {
	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Respect</h2>
				<img className="Vector" src={vector} alt="Fleche" />
			</div>
			<p className="MenuHide">
				La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
				comportement discriminatoire ou de perturbation du voisinage entraînera
				une exclusion de notre plateforme.
			</p>
		</div>
	);
}

export default Respect;
