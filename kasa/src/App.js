import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/404" element={<Error />} />
				<Route exact path="/APropos" element={<APropos />} />
				<Route exact path="/FicheLogement" element={<FicheLogement />} />
				<Route exact path="/FicheLogement/:id" element={<FicheLogement />} />
			</Routes>
		</div>
	);
}

export default App;
