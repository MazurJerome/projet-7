import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleLogement from "../components/TitleLogement";
import Host from "../components/Host";
import "../style/ficheLogement.css";
import { useParams } from "react-router-dom";
import Bank from "../BDD/bank.json";
import "../style/Menu.css";
import vector from "../images/Vector.svg";

function FicheLogement() {
	const { id } = useParams();
	let product = [];
	console.log("product 0 ", product);
	Bank.forEach((element) => {
		if (element.id === id) {
			product[0] = element;
		}
	});

	return (
		<div>
			<Header />
			<div>carousel</div>
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
							<img className="Vector" src={vector} alt="Fleche" />
						</div>
						<p className="MenuHide">{product[0].description}</p>
					</div>
				</div>
				<div className="MenusLogement50">
					<div className="MenuD">
						<div className="MenuFix">
							<h2>Equipement</h2>
							<img className="Vector" src={vector} alt="Fleche" />
						</div>
						<ul>
							{product[0].equipments.map((element) => (
								<li className="ListEquipements">{element}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default FicheLogement;
