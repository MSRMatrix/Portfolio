import "./startsite.css";
import kiMan from "/src/assets/ki-man.png"

const Startsite = () => {
  return (
  <div className="information-container">
    <h1>Michael</h1>
    <h2>Ich präsentiere die Zukunft der Web Developer Branche!</h2>
    <img src={kiMan} alt="ki-man" />
    </div>)
};

export default Startsite;
