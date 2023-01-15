import React from "react";
import Bank from "../BDD/bank.json";
import "../style/Gallery.css";

function Gallery() {
	const BDD = Bank;

	return (
		<div className="contenaire">
			{BDD.map((element) => (
				<div className="box" id={element.id}>
					<img className="imgGallery" src={element.cover} alt="" />
					<h2 className="titleBox">{element.title}</h2>
				</div>
			))}
		</div>
	);
}

export default Gallery;
