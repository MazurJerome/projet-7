import { useState } from "react";
import "../style/Collapse.css";
import vector from "../images/Vector.svg";

function Collapse(props) {
	//useState pour que le menu soit ouvert ou fermé
	const [toggle, setToggle] = useState(false);
	const collapseTitle = props.Title;
	const collapseText = props.Text;

	return (
		<div className="Menu">
			<div className="MenuFix">
				<h2>{collapseTitle}</h2>
				<button className="ButtonMenu" onClick={() => setToggle(!toggle)}>
					{toggle ? (
						<img className="Vector" src={vector} alt="Fleche" />
					) : (
						<img className="Vector180" src={vector} alt="Fleche" />
					)}
				</button>
			</div>
			{toggle && <p className="MenuHide">{collapseText}</p>}
		</div>
	);
}

export default Collapse;
