import gamers from "../../assets/iniciobackgnd.png";
import banner from "../../assets/welcomtxtstart.png";
import "./Home.css";

function Home() {
  return (
    <section className="home-container">
      <img className="gamers-img" src={gamers} alt="Gamers" />

      <img className="banner-img" src={banner} alt="Banner" />
    </section>
  );
}

export default Home;
