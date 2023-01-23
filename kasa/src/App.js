import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";
import APropos from "./pages/APropos";
import Composants from "./pages/Composants";
import FicheLogement from "./pages/FicheLogement";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact="true" path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
				<Route exact="true" path="/APropos" element={<APropos />} />
				<Route exact="true" path="/Composants/:id" element={<Composants />} />
				<Route
					exact="true"
					path="/FicheLogement/:id"
					element={<FicheLogement />}
				/>
			</Routes>
		</div>
	);
}

export default App;
