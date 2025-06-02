import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./App.css";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Katakana from "./pages/Katakana";
import Hiragana from "./pages/Hiragana";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<>
						<Route path="/Main" element={<Main />} />
						<Route path="/About" element={<About />} />
						<Route path="/Kata" element={<Katakana />} />
						<Route path="/Hira" element={<Hiragana />} />
					</>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
