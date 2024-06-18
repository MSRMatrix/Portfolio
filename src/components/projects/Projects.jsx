import { NavLink } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  return (
    <div className="information-container">
      <h1>Meine Projekte</h1>
      <div className="project-container">
        <div>
          <a href="https://media-player-seven-black.vercel.app/"><h1>AcoustiFlow</h1></a>
          <a href="https://media-player-seven-black.vercel.app/"><img src="src/assets/walkman.jpg" alt="" /></a>
        </div>
        <div>
          <a href="https://stuffit-x83e.onrender.com/"><h2>StuffIt</h2></a>
          <a href="https://stuffit-x83e.onrender.com/"><img src="src/assets/cash-stuffing.png" alt="" /></a>
        </div>
        <div>
          <a href="https://weatherapp-amber-six.vercel.app/"><h1>Weather App</h1></a>
          <a href="https://weatherapp-amber-six.vercel.app/"><img src="src/assets/weather-app.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
