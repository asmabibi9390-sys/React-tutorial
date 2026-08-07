import "./App.css";
import hero from "./assets/hero.png";

function App() {

  const name = "Asma";
  const course = "React.js";
  const age = 20;

  return (
    <>
      <h1 className="heading"> Welcome to My React Journey</h1>

      <img src={hero} alt="Hero" className="hero-img" />

      <h2>Hello, {name} </h2>

      <h3>Course: {course}</h3>

      <h3>Age: {age}</h3>

      <p>
        Learning React.js one component at a time and building beautiful
        websites.
      </p>

      <h3>10 + 20 = {10 + 20}</h3>

      <button className="btn">Explore More</button>
    </>
  );
}

export default App;