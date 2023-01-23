import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Bank from "../BDD/bank.json";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../style/Gallery.css";
import "../style/TitleLogement.css";
import "../style/Collapse.css";
import "../style/Composants.css";

function Composants() {
	const { id } = useParams();
	const card = Bank.find((item) => item.id === id);
	const navigate = useNavigate();

	useEffect(() => {
		if (!card) {
			navigate("/404");
		}
	}, [card, navigate, id]);

	if (card) {
		const Title = "Description";
		const Text = card.description;
		const Title2 = "Equipement";
		const Text2 = card.equipments.map((element, ind) => (
			<li className="ListEquipements" key={ind}>
				{element}
			</li>
		));
		const Title3 = "Fiabilité";
		const Text3 =
			"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
		const Title4 = "Respect";
		const Text4 =
			"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
		const tags = card.tags;

		return (
			<div>
				<Header accLink="show" aProposLink="show" />
				<ul className="tags">
					{tags.map((element, index) => (
						<li key={`navLink ${element} ${index}`}>{element}</li>
					))}
				</ul>
				<div className="box">
					<img className="imgGallery" src={card.cover} alt="" />
					<h2 className="titleBox">{card.title}</h2>
				</div>
				<div className="CollapseRow">
					<Collapse Title={Title} Text={Text} />
					<Collapse Title={Title2} Text={Text2} />
				</div>
				<div className="CollapseColumn">
					<Collapse Title={Title3} Text={Text3} />
					<Collapse Title={Title4} Text={Text4} />
				</div>
				<Slideshow img={card.pictures} />
				<img className="imgEndComposant" src={card.pictures[0]} alt="appart" />
				<Footer />
			</div>
		);
	}
}

export default Composants;
