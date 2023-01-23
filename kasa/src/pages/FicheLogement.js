import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Bank from "../BDD/bank.json";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleLogement from "../components/TitleLogement";
import Slideshow from "../components/Slideshow";
import Host from "../components/Host";
import Collapse from "../components/Collapse";

import "../style/FicheLogement.css";
import "../style/Collapse.css";

function FicheLogement() {
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

		return (
			<div>
				<Header accLink="show" aProposLink="show" />
				<Slideshow img={card.pictures} />
				<div className="LogementInfos">
					<TitleLogement
						title={card.title}
						tags={card.tags}
						location={card.location}
					/>
					<Host
						name={card.host.name}
						picture={card.host.picture}
						rating={card.rating}
					/>
				</div>
				<div className="CollapseRow">
					<Collapse Title={Title} Text={Text} />
					<Collapse Title={Title2} Text={Text2} />
				</div>

				<Footer />
			</div>
		);
	}
}

export default FicheLogement;
