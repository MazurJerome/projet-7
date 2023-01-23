import image_back from "../images/Background_APropos.jpg";
import "../style/Banner.css";

function BannerAPropos() {
	return (
		<div className="banner-principal">
			<div className="banner-box">
				<img
					className="banner-img"
					src={image_back}
					alt="bannier avec montagnes en fond"
				/>
				<div className="banner-calc"></div>
			</div>
		</div>
	);
}

export default BannerAPropos;
