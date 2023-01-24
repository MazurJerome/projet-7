import "../style/Collapse.css";
import Collapse from "./Collapse";

function Fiabilite() {
	const Title = "Fiabilité";
	const Text =
		"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";

	return <Collapse Title={Title} Text={Text} />;
}

export default Fiabilite;
