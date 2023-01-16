import { useState } from "react";
import "../style/Carrousel.css";
import vector from "../images/Vector.svg";

function Carrousel(props) {
	const Picture = props.img;
	let [toggle, setToggle] = useState(0);

	if (toggle < 0) {
		let maxGal = Picture.length - 1;
		toggle = maxGal;
	} else if (toggle > Picture.length - 1) {
		toggle = 0;
	}
	return (
		<div className="ContainerCarrousel">
			<button
				className="ButtonCarrouselG"
				onClick={() => setToggle((toggle = toggle - 1))}
			>
				<img className="VectorCarrousel" src={vector} alt="Fleche" />
			</button>
			<img className="ImgLogement" src={Picture[toggle]} alt="pict" />
			<button
				className="ButtonCarrouselD"
				onClick={() => setToggle((toggle = toggle + 1))}
			>
				<img className="VectorCarrousel" src={vector} alt="Fleche" />
			</button>
		</div>
	);
}

export default Carrousel;
