import FloatingNav from "../FloatingNav/FloatingNav";
import logo from "../../assets/home/logovamx.png";
import logobg from "../../assets/home/logo-bg.png";
import logobackpattern from "../../assets/home/logobackpattern.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <a href="#">
          <img className="nav-logo" src={logo} alt="Logo" />
        </a>
        <img className="nav-logo-bg" src={logobg} alt="Logo Background" />
        <img
          className="nav-logo-bg-pattern"
          src={logobackpattern}
          alt="Logo Background Pattern"
        />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Nosotros</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#contact">Alianzas</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <FloatingNav />
    </nav>
  );
}

export default NavBar;
