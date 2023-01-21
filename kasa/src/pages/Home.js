import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<Header accLink="hide" />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	);
}

export default Home;
