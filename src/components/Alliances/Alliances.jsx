import bob from "../../assets/alianzas/bobactor.png";
import bg from "../../assets/home/logobackpattern.png";
import splashLeft from "../../assets/home/splashpatternleft.png";
import splashRigth from "../../assets/home/splashpatternrigth.png";
import "./Alliances.css";

function Alliances() {
  return (
    <section className="alliances-container">
      <div className="about-text">
        <h1>ALIANZAS</h1>
        <p>Fabricantes de Hardware y Proveedores de Tecnología</p>
        <p>Alianzas de Entretención y Eventos en Vivo</p>
        <p>Los mejores proveedores de software y licenciamiento de contenido</p>
        <p>Socios operativos y franquicias</p>
      </div>
      <div className="about-image">
        <img className="splash-left" src={splashLeft} alt="Splash Left" />
        <img className="splash-right" src={splashRigth} alt="Splash Right" />
        <img src={bob} alt="About Us" />
        <img className="about-bg" src={bg} alt="Background Pattern" />
      </div>
    </section>
  );
}

export default Alliances;
