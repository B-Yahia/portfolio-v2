import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header/Header";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Sections/Footer/Footer";
import WordsCounter from "./Projects/WordsCounter/WordsCounter";
import ColorGuess from "./Projects/ColorGuess/ColorGuess";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/word_counter" element={<WordsCounter />} />
        <Route path="/color_guess" element={<ColorGuess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
