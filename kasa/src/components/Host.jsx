import "../style/Host.css";
import Star from "../images/Star.svg";

function Host(props) {
	const name = props.name;
	const picture = props.picture;
	const rating = props.rating;

	return (
		<div className="logementHostInfos">
			<div className="logementHost">
				<p className="name">{name}</p>
				<img className="PictureHost" src={picture} alt="Host" />
			</div>
			<div className="stars">
				<p>{rating}</p>
				<img className="star" src={Star} alt="Star" />
				<img className="star" src={Star} alt="Star" />
				<img className="star" src={Star} alt="Star" />
				<img className="star" src={Star} alt="Star" />
				<img className="star" src={Star} alt="Star" />
			</div>
		</div>
	);
}

export default Host;
