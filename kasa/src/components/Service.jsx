import { useState } from "react";
import "../style/Menu.css";
import vector from "../images/Vector.svg";

function Service() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>Service</h2>
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
					Nos équipes se tiennent à votre disposition pour vous fournir une
					expérience parfaite. N'hésitez pas à nous contacter si vous avez la
					moindre question.
				</p>
			)}
		</div>
	);
}

export default Service;
