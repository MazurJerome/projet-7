import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/404" element={<Error />} />
				<Route exact path="/bbb" element={<Gallery />} />
				<Route exact path="/ccc" element={<Footer />} />
			</Routes>
		</div>
	);
}

export default App;
