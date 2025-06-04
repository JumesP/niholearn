import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Stage0 from "./pages/stages/Stage0";
import Stage1 from "./pages/stages/Stage1";
import Stage2 from "./pages/stages/Stage2";
import Stage3 from "./pages/stages/Stage3";
import Stage4 from "./pages/stages/Stage4";
import Stage5 from "./pages/stages/Stage5";
import Stage6 from "./pages/stages/Stage6";
import Stage7 from "./pages/stages/Stage7";
import Stage8 from "./pages/stages/Stage8";

import Stage1Home from "./pages/stages/Stage1/Stage1Home";
import HiraganaFlipCards from "./pages/stages/Stage1/HiraganaFlipCards";
import HiraganaQuiz from "./pages/stages/Stage1/HiraganaQuiz";
import HiraganaChart from "./pages/stages/Stage1/HiraganaChart";

import Stage2Home from "./pages/stages/Stage2/Stage2Home";
import KatakanaFlipCards from "./pages/stages/Stage2/KatakanaFlipCards";
import KatakanaQuiz from "./pages/stages/Stage2/KatakanaQuiz";
import KatakanaChart from "./pages/stages/Stage2/KatakanaChart";

import Stage3Home from "./pages/stages/Stage3/Stage3Home";
import BasicVocabFlipCards from "./pages/stages/Stage3/BasicVocabFlipCards";
import GreetingsQuiz from "./pages/stages/Stage3/GreetingsQuiz";
import DialoguePractice from "./pages/stages/Stage3/DialoguePractice";
import SentencePractice from "./pages/stages/Stage3/SentencePractice";

import Stage4Home from "./pages/stages/Stage4/Stage4Home";
import ParticleQuiz from "./pages/stages/Stage4/ParticleQuiz";
import SentenceBuilder from "./pages/stages/Stage4/SentenceBuilder";
import GrammarDrills from "./pages/stages/Stage4/GrammarDrills";

// import "./App.css";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Katakana from "./pages/stages/Stage2/KatakanaFlipCards";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<>
						<Route path="/Main" element={<Main />} />
						<Route path="/About" element={<About />} />
						<Route path="/Stage0" element={<Stage0 />} />
						<Route path="/Stage1" element={<Stage1 />}>
						    <Route index element={<Stage1Home />} />
						    <Route path="main" element={<Stage1Home />} />
						    <Route path="chart" element={<HiraganaChart />} />
						    <Route path="flip-cards" element={<HiraganaFlipCards />} />
						    <Route path="quiz" element={<HiraganaQuiz />} />
						</Route>
						<Route path="/Stage2" element={<Stage2 />}>
							<Route index element={<Stage2Home />} />
							<Route path="main" element={<Stage2Home />} />
							<Route path="chart" element={<KatakanaChart/>} />
							<Route path="flip-cards" element={<KatakanaFlipCards />} />
							<Route path="quiz" element={<KatakanaQuiz />} />
						</Route>
						<Route path="/Stage3" element={<Stage3 />}>
							<Route index element={<Stage3Home />} />
							<Route path="main" element={<Stage3Home />} />
							<Route path="vocab-cards" element={<BasicVocabFlipCards />} />
							<Route path="greetings" element={<GreetingsQuiz />} />
							<Route path="dialogues" element={<DialoguePractice />} />
							<Route path="sentences" element={<SentencePractice />} />
						</Route>
						<Route path="/Stage4" element={<Stage4 />}>
							<Route index element={<Stage4Home />} />
							<Route path="main" element={<Stage4Home />} />
							<Route path="particle-quiz" element={<ParticleQuiz />} />
							<Route path="sentence-builder" element={<SentenceBuilder />} />
							<Route path="grammar-drills" element={<GrammarDrills />} />
						</Route>
						<Route path="/Stage5" element={<Stage5 />} />
						<Route path="/Stage6" element={<Stage6 />} />
						<Route path="/Stage7" element={<Stage7 />} />
						<Route path="/Stage8" element={<Stage8 />} />
					</>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
