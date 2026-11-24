import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import socialicon from "../../assets/home/socialicon.png";
import bot from "../../assets/home/socialiconbot.png";
import "./FloatingNav.css";

function FloatingNav() {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible((prev) => !prev);
    const nav = document.getElementById("floating-nav-container");
    visible
      ? Object.assign(nav.style, {
          right: "-300px",
          transform: "translateX(0px)",
          transition: "right 1.5s ease-in-out",
        })
      : Object.assign(nav.style, {
          right: "-20px",
          transform: "translateX(0px)",
          transition: "right 1.5s ease-in-out",
        });
  };

  const handleShow2 = () => {
    setVisible((prev) => !prev);
    const nav = document.getElementById("floating-nav-2-container");
    visible
      ? Object.assign(nav.style, {
          right: "-145px",
          transform: "translateX(0px)",
          transition: "right 1s ease-in-out",
        })
      : Object.assign(nav.style, {
          right: "-20px",
          transform: "translateX(0px)",
          transition: "right 1s ease-in-out",
        });
  };

  return (
    <>
      <nav>
        <div
          id="floating-nav-container"
          className="floating-nav-container"
          onClick={handleShow}
        >
          <img className="social-icon" src={socialicon} alt="Social Icon" />
          <a
            className="social-icon-item"
            href="https://www.instagram.com/virtual_arena_mx/?hl=es-la"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
          <a
            className="social-icon-item"
            href="https://www.facebook.com/virtualarenamx"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="social-icon-item"
            href="https://twitter.com/virtualarenamx"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <p>@virtual_arena_mx</p>
        </div>
      </nav>
      <nav>
        <div
          id="floating-nav-2-container"
          className="floating-nav-2-container"
          onClick={handleShow2}
        >
          <FaWhatsapp className="social-icon-2" />
          <a
            className="social-icon-2-item"
            href="https://www.instagram.com/virtual_arena_mx/?hl=es-la"
            target="_blank"
          >
            <FaPhoneAlt />
          </a>
          <a
            className="social-icon-2-item"
            href="https://www.facebook.com/virtualarenamx"
            target="_blank"
          >
            <FaEnvelope />
          </a>
          <img className="social-icon-img" src={bot} alt="Bot Icon" />
        </div>
      </nav>
    </>
  );
}

export default FloatingNav;
