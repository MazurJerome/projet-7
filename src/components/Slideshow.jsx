import { useState } from "react";
import "../style/Slideshow.css";
import vector from "../images/Vector.svg";

//fonction qui affiche un carrousel et qui recupere en propos les differentes images a afficher
function Slideshow(props) {
	const Picture = props.img;
	let [toggle, setToggle] = useState(0);

	//boucle, si on clique a gauche sur la premiere image on est envoyé sur la dernière
	//et la meme chose pour la derniere si on clique a droite, renvoie sur la première
	if (toggle < 0) {
		let maxGal = Picture.length - 1;
		toggle = maxGal;
	} else if (toggle > Picture.length - 1) {
		toggle = 0;
	}

	// on verifie si il y a plusieur images, si il n'y en a qu'une seule, pas de carrousel
	if (Picture.length === 1) {
		return (
			<div className="ContainerSlideshow">
				<img className="ImgLogement" src={Picture[toggle]} alt="pict" />
			</div>
		);
	} else {
		return (
			<div className="ContainerSlideshow">
				<button
					className="ButtonSlideshowG"
					onClick={() => setToggle((toggle = toggle - 1))}
				>
					<img className="VectorSlideshow" src={vector} alt="Fleche" />
				</button>
				<img className="ImgLogement" src={Picture[toggle]} alt="pict" />
				<button
					className="ButtonSlideshowD"
					onClick={() => setToggle((toggle = toggle + 1))}
				>
					<img className="VectorSlideshow" src={vector} alt="Fleche" />
				</button>
			</div>
		);
	}
}

export default Slideshow;
