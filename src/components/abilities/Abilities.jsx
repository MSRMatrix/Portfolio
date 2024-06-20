import "./abilities.css";
import html from "/src/assets/html-ai.png"
import css from "/src/assets/css3.png"
import js from "/src/assets/js.png"
import mernStack from "/src/assets/mern-stack.png"

const Abilities = () => {
  const skills = [
    {
      name: "HTML",
      image: html
    },
    {
      name: "CSS",
      image: css
    },
    {
      name: "JavaScript",
      image: js
    },
    {
      name: "MERN Stack",
      image: mernStack
    },
  ];

  return (
    <div className="information-container">
      <h1>Meine Developer Fähigkeiten</h1>
      <div className="img-container">
        {skills.map((skill) => (
          <div key={skill.name} className="picture-div">
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;