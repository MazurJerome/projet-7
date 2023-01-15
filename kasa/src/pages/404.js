import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/error.css";

function Error() {
	return (
		<div>
			<Header />
			<div className="error-container">
				<p className="error">404</p>
				<p className="error-message">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<p className="error-home">Retourner sur la page d’accueil</p>
			</div>
			<Footer />
		</div>
	);
}

export default Error;
