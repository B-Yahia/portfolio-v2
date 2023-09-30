import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header/Header";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Sections/Footer/Footer";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
