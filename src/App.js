import "./App.css";
import NavbarComponent from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import HeroSectionComponent from "./pages/hero_section";
import Hire from "./pages/hire";
import Portfolio from "./pages/portfolio";
import Service from "./pages/service";
import "./styles/common.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }} className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HeroSectionComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hire_me" element={<Hire />} />
      </Routes>
    </div>
  );
}

export default App;
