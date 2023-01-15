import "../style/Header.css";
import logo from "../images/LOGO.svg";

function Header() {
	return (
		<header>
			<img src={logo} className="App-logo" alt="logo" />

			<nav>
				<p>Accueil</p>
				<p>A Propos</p>
			</nav>
		</header>
	);
}
export default Header;
