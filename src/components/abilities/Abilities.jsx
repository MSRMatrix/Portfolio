import "./abilities.css";
import html from "/src/assets/html-ai.png"
import css from "/src/assets/css-ai.png"
import js from "/src/assets/javascript.png"
import mernStack from "/src/assets/mern-stack.png"

const Abilities = () => {
  const skills = [
    {
      name: "HTML",
      text: "Ich beherrsche HTML souverän und gestalte damit strukturierte, barrierefreie Webseiten.",
      image: html
    },
    {
      name: "CSS",
      text: "Meine CSS-Fähigkeiten erstrecken sich über das Design von ansprechenden und ästhetischen Webseiten.",
      image: css
    },
    {
      name: "JavaScript",
      text: "Meine JavaScript-Fähigkeiten umfassen die Entwicklung interaktiver Webseiten und die Implementierung von benutzerdefinierten Funktionen.",
      image: js
    },
    {
      name: "MERN Stack",
      text: "Ich bin versiert im MERN-Stack, einschließlich MongoDB, Express.js, React und Node.js.",
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
            <div className="hover-text">{skill.text}</div>
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;