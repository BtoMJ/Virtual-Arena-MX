import { useLocation } from "react-router";
import { NavLink } from "react-router";

import FloatingNav from "../FloatingNav/FloatingNav";
import logo from "../../assets/home/logovamx.png";
import logobg from "../../assets/home/logo-bg.png";
import logobackpattern from "../../assets/home/logobackpattern.png";

import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  console.log(location);

  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <NavLink to="/" end>
          <img className="nav-logo" src={logo} alt="Logo" />
        </NavLink>

        <img className="nav-logo-bg" src={logobg} alt="Logo Background" />
        <img
          className="nav-logo-bg-pattern"
          src={logobackpattern}
          alt="Logo Background Pattern"
        />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={location === "/nosotros" ? "active" : ""}
            to="/nosotros"
            end
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/servicios" end>
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/alianzas" end>
            Alianzas
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" end>
            Contacto
          </NavLink>
        </li>
      </ul>
      <FloatingNav />
    </nav>
  );
}

export default NavBar;
