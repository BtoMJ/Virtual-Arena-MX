import { BrowserRouter, Routes, Route } from "react-router";

import Alliances from "./components/Alliances/Alliances";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="app-nav-container">
          <NavBar />
        </nav>
        <section className="app-content-container" id="home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/alianzas" element={<Alliances />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
