import { NavLink } from "react-router-dom";
import React from "react";
import Bank from "../BDD/bank.json";
import "../style/Gallery.css";

/* fonction qui affiche la liste des logement disponible et toutes les infos, 
    dans un lien de redirection sur la page produit, le tout avec un arrey.map */
function Gallery() {
	const BDD = Bank;
	const routeLogement = "/FicheLogement/";

	return (
		<div className="contenaire">
			{BDD.map((element, index) => (
				<NavLink
					className="box"
					key={`navLink ${element.id} ${index}`}
					to={`${routeLogement}${element.id}`}
					exact="true"
				>
					<div key={`cont ${element.id} ${index}`}>
						<img
							className="imgGallery"
							src={element.cover}
							alt=""
							key={`img ${element.id} ${index}`}
						/>
						<h2 className="titleBox" key={`h2 ${element.id} ${index}`}>
							{element.title}
						</h2>
					</div>
				</NavLink>
			))}
		</div>
	);
}

export default Gallery;
