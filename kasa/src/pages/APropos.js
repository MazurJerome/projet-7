import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAPropos from "../components/Banner_APropos";
import Fiabilite from "../components/Fiabilite";
import Respect from "../components/Respect";
import Service from "../components/Service";
import Securite from "../components/Securite";

function APropos() {
	return (
		<div>
			<Header accLink="show" aProposLink="hide" />
			<BannerAPropos />
			<Fiabilite />
			<Respect />
			<Service />
			<Securite />
			<Footer />
		</div>
	);
}

export default APropos;
