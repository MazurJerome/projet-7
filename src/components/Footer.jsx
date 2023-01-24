import "../style/Footer.css";
import logo from "../images/LOGO-Blanc.svg";

function Footer() {
	return (
		<footer>
			<img src={logo} className="App-logo" alt="logo" />

			<div>
				<p className="p-foot">© 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}
export default Footer;
