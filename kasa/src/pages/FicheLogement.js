import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleLogement from "../components/TitleLogement";
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import "../style/ficheLogement.css";
import { useParams } from "react-router-dom";
import Bank from "../BDD/bank.json";
import "../style/Menu.css";
import vector from "../images/Vector.svg";

function FicheLogement() {
	const [toggle, setToggle] = useState(false);
	const [toggle1, setToggle1] = useState(false);
	const { id } = useParams();
	let product = [];
	Bank.forEach((element) => {
		if (element.id === id) {
			product[0] = element;
		}
	});

	return (
		<div>
			<Header />
			<Carrousel img={product[0].pictures} />
			<div className="LogementInfos">
				<TitleLogement
					title={product[0].title}
					tags={product[0].tags}
					location={product[0].location}
				/>
				<Host
					name={product[0].host.name}
					picture={product[0].host.picture}
					rating={product[0].rating}
				/>
			</div>
			<div className="MenusLogement">
				<div className="MenusLogement50">
					<div className="MenuG">
						<div className="MenuFix">
							<h2>Description</h2>
							<button className="ButtonMenu" onClick={() => setToggle(!toggle)}>
								{toggle ? (
									<img className="Vector" src={vector} alt="Fleche" />
								) : (
									<img className="Vector180" src={vector} alt="Fleche" />
								)}
							</button>
						</div>
						{toggle && <p className="MenuHide">{product[0].description}</p>}
					</div>
				</div>
				<div className="MenusLogement50">
					<div className="MenuD">
						<div className="MenuFix">
							<h2>Equipement</h2>
							<button
								className="ButtonMenu"
								onClick={() => setToggle1(!toggle1)}
							>
								{toggle1 ? (
									<img className="Vector" src={vector} alt="Fleche" />
								) : (
									<img className="Vector180" src={vector} alt="Fleche" />
								)}
							</button>
						</div>
						{toggle1 && (
							<ul className="MenuHide">
								{product[0].equipments.map((element, ind) => (
									<li className="ListEquipements" key={ind}>
										{element}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default FicheLogement;
