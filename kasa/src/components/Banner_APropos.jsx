import image_back from "../images/Background_APropos.jpg";
import "../style/BannerAPropos.css";

function BannerAPropos() {
	return (
		<div className="bannerAPropos-principal">
			<div className="bannerAPropos">
				<img className="imgAPropos" src={image_back} alt="" />
				<div className="clacImgAPropos"></div>
			</div>
		</div>
	);
}

export default BannerAPropos;
