import "../style/Banner.css";
import Image_back from "../images/Background_head.jpg";

function Banner() {
	return (
		<div className="banner-principal">
			<div className="banner-d">
				<div>
					<div className="banner-calc"></div>
					<img src={Image_back} className="banner-img" alt="paysage" />
				</div>
				<h1 className="banner-p">Chez vous, partout et ailleurs</h1>
			</div>
		</div>
	);
}

export default Banner;
