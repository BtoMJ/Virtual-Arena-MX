import gamers from "../../assets/home/iniciobackgnd.png";
import banner from "../../assets/home/welcomtxtstart.png";
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
