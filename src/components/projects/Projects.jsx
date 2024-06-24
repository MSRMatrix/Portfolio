import { NavLink } from "react-router-dom";
import "./projects.css";
import acoustiFlow from "/src/assets/walkman.jpg"
import cashStuffing from "/src/assets/cash-stuffing.png"
import weatherApp from "/src/assets/weather-app.png"
import { useEffect, useState } from "react";

const Projects = () => {
  const [topic, setTopic] = useState("topic");
  const[showProjectDiv, setShowProjectDiv] = useState("project-div")
  const[showPic, setShowPic] = useState("project-pic-class")

  useEffect(() => {
    setTopic(topic + " enter-class")
    setShowProjectDiv(showProjectDiv + " show-project-div")
    setShowPic(showPic + " show-pic")
  }, []);


  return (
    <div className="information-container">
      <h1 className={topic}>Meine Projekte</h1>
      <div className="project-container">
        <div className={showProjectDiv}>
          <a target="_blank" rel="noopener noreferrer" href="https://media-player-seven-black.vercel.app/"><h1>AcoustiFlow</h1></a>
          <a target="_blank" rel="noopener noreferrer" href="https://media-player-seven-black.vercel.app/"><img src={acoustiFlow} alt="" className={showPic}/></a>
        </div>
        <div className={showProjectDiv}>
          <a target="_blank" rel="noopener noreferrer" href="https://stuffit-x83e.onrender.com/"><h1>StuffIt</h1></a>
          <a target="_blank" rel="noopener noreferrer" href="https://stuffit-x83e.onrender.com/"><img src={cashStuffing} alt="" className={showPic}/></a>
        </div>
        <div className={showProjectDiv}>
          <a target="_blank" rel="noopener noreferrer" href="https://weatherapp-amber-six.vercel.app/"><h1>Weather App</h1></a>
          <a target="_blank" rel="noopener noreferrer" href="https://weatherapp-amber-six.vercel.app/"><img src={weatherApp} alt="" className={showPic}/></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;