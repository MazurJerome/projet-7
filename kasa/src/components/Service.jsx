import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Service() {
	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Service</h2>
				<img className="Vector" src={vector} alt="Fleche" />
			</div>
			<p className="MenuHide">
				Nos équipes se tiennent à votre disposition pour vous fournir une
				expérience parfaite. N'hésitez pas à nous contacter si vous avez la
				moindre question.
			</p>
		</div>
	);
}

export default Service;
