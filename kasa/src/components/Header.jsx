import "../style/Header.css";
import { NavLink } from "react-router-dom";
import logo from "../images/LOGO.svg";

function Header(props) {
	//recuperation des propos pour savoir si on affiche les deux liens
	const accLink = props.accLink;
	const aProposLink = props.aProposLink;

	if (accLink === "hide") {
		return (
			<header>
				<img src={logo} className="App-logo-head" alt="logo" />

				<nav className="navCenter">
					<NavLink className="navbar-APropos" to="/APropos" exact="true">
						A Propos
					</NavLink>
				</nav>
			</header>
		);
	}
	if (aProposLink === "hide") {
		return (
			<header>
				<img src={logo} className="App-logo-head" alt="logo" />

				<nav className="navCenter">
					<NavLink className="navbar-Accueil" to="/" exact="true">
						Accueil
					</NavLink>
				</nav>
			</header>
		);
	}

	if (accLink === "show" && aProposLink === "show") {
		return (
			<header>
				<img src={logo} className="App-logo-head" alt="logo" />

				<nav>
					<NavLink className="navbar-Accueil" to="/" exact="true">
						Accueil
					</NavLink>
					<NavLink className="navbar-APropos" to="/APropos" exact="true">
						A Propos
					</NavLink>
				</nav>
			</header>
		);
	}
}
export default Header;
