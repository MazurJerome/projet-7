import "../style/Host.css";
import Star from "../images/Star.svg";
import StarRed from "../images/StarRed.svg";

function Host(props) {
	const name = props.name;
	const picture = props.picture;
	const rating = props.rating;

	//pour afficher les etoiles, je creer un tableau de booleen ,
	//true pour les etoile rouge et false pour les grises
	let Stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < rating) {
			Stars[i] = true;
		} else {
			Stars[i] = false;
		}
	}

	return (
		<div className="logementHostInfos">
			<div className="logementHost">
				<p className="name">{name}</p>
				<img className="PictureHost" src={picture} alt="Host" />
			</div>
			<div className="stars">
				{Stars.map((element, ind) =>
					element ? (
						<img className="star" src={StarRed} alt="starRed" key={ind} />
					) : (
						<img className="star" src={Star} alt="Star" key={ind} />
					)
				)}
			</div>
		</div>
	);
}

export default Host;
