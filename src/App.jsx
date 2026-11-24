import "./App.css";
import About from "./components/About/About";
// import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="app-container">
        {/* <Home /> */}
        <About />
      </div>
    </>
  );
}

export default App;
