import "../style/Collapse.css";
import Collapse from "./Collapse";

function Service() {
	const Title = "Service";
	const Text =
		"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";

	return <Collapse Title={Title} Text={Text} />;
}

export default Service;
