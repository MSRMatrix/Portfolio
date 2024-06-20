import "./abilities.css";
import html from "/src/assets/html-ai.png";
import css from "/src/assets/css3.png";
import js from "/src/assets/js.png";
import mernStack from "/src/assets/mern-stack.png";
import python from "/src/assets/python.png";

const Abilities = () => {
  const skills = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "MERN Stack",
      image: mernStack,
    },
  ];

  const inProgress = [
    {
      name: "PYTHON",
      image: python,
    },
  ];

  return (
    <div className="information-container">
      <h1 className="h1-from-abilities">Meine Developer Fähigkeiten</h1>
      <div className="img-container">
        {skills.map((skill) => (
          <div key={skill.name} className="picture-div">
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}<i className="fa-solid fa-check"></i></h3>
          </div>
        ))}
      </div>
      <h1 className="h1-from-abilities">Lernphase</h1> 
      <div className="img-container">
       {inProgress.map((skill) => (
        <div key={skill.name} className="picture-div">
          <img src={skill.image} alt={skill.name} />
          <h3>{skill.name}<i className="fa-solid fa-hourglass-start"></i></h3>
        </div>
      ))} 
      </div>
      
      
    </div>
  );
};

export default Abilities;
