import girl from "../../assets/about/BELactionactor.png";
import bg from "../../assets/home/logobackpattern.png";
import splashLeft from "../../assets/home/splashpatternleft.png";
import splashRigth from "../../assets/home/splashpatternrigth.png";
import "./About.css";

function About() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h1>NOSOTROS</h1>
        <p>
          Especializados en convetir un espacio físico en una experiencia
          inmersiva donde los asistentes ingresan a entornos virtuales para
          explorar o comper.
        </p>
        <p>
          Creamos puntos de alto interés para activaciones de diversas marcas.
          <br />
          La posibilidad de elegir juego o modo facilita adaptar la experiencia
          a distintos perfiles de usuario y objevos de evento, desde
          entretenimiento rápido hasta retos con ranking final.
        </p>
        <p>
          Generamos sensaciones de inmersión difíciles de replicar con otros
          formatos. El usuario no solo observa, sino que entra en una escena
          digital donde reacciona, se mueve y participa, lo que eleva y
          fortalece la percepción de una experiencia más avanzada e inolvidable
          !!.
        </p>
        <p>
          Somos una acertada desición para eventos privados, cumpleaños, ferias,
          convenciones, lanzamientos, espacios de innovación y activaciones de
          marca donde se busca diferenciar la experiencia y generar
          conversación. Además de entretener, permite incorporar lógica
          competitiva, resultados visibles y una operación clara para audiencias
          amplias.
        </p>
      </div>
      <div className="about-image">
        <img className="splash-left" src={splashLeft} alt="Splash Left" />
        <img className="splash-right" src={splashRigth} alt="Splash Right" />
        <img src={girl} alt="About Us" />
        <img className="about-bg" src={bg} alt="Background Pattern" />
      </div>
    </section>
  );
}

export default About;
