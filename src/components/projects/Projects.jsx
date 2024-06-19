import { NavLink } from "react-router-dom";
import "./projects.css";
import acoustiFlow from "/src/assets/walkman.jpg"
import cashStuffing from "/src/assets/cash-stuffing.png"
import weatherApp from "/src/assets/weather-app.png"

const Projects = () => {
  return (
    <div className="information-container">
      <h1>Meine Projekte</h1>
      <div className="project-container">
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://media-player-seven-black.vercel.app/"><h1>AcoustiFlow</h1></a>
          <a target="_blank" rel="noopener noreferrer" href="https://media-player-seven-black.vercel.app/"><img src={acoustiFlow} alt="" /></a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://stuffit-x83e.onrender.com/"><h2>StuffIt</h2></a>
          <a target="_blank" rel="noopener noreferrer" href="https://stuffit-x83e.onrender.com/"><img src={cashStuffing} alt="" /></a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://weatherapp-amber-six.vercel.app/"><h1>Weather App</h1></a>
          <a target="_blank" rel="noopener noreferrer" href="https://weatherapp-amber-six.vercel.app/"><img src={weatherApp} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
