import "../style/TitleLogement.css";

function TitleLogement(props) {
	const title = props.title;
	const tags = props.tags;
	const location = props.location;

	return (
		<div className="logement_title">
			<h1 className="title">{title}</h1>
			<p className="location">{location}</p>
			<ul className="tags">
				{tags.map((element, index) => (
					<li key={`navLink ${element} ${index}`}>{element}</li>
				))}
			</ul>
		</div>
	);
}

export default TitleLogement;
