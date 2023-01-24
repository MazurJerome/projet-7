import "../style/Collapse.css";
import Collapse from "./Collapse";

function Respect() {
	const Title = "Respect";
	const Text =
		"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

	return <Collapse Title={Title} Text={Text} />;
}

export default Respect;
