import "./abilities.css";

const Abilities = () => {
  const skills = [
    {
      name: "HTML",
      text: "Ich beherrsche HTML souverän und gestalte damit strukturierte, barrierefreie Webseiten.",
      image: 'src/assets/html-ai.png'
    },
    {
      name: "CSS",
      text: "Meine CSS-Fähigkeiten erstrecken sich über das Design von ansprechenden und ästhetischen Webseiten.",
      image: 'src/assets/css-ai.png'
    },
    {
      name: "JavaScript",
      text: "Meine JavaScript-Fähigkeiten umfassen die Entwicklung interaktiver Webseiten und die Implementierung von benutzerdefinierten Funktionen.",
      image: 'src/assets/javascript.png'
    },
    {
      name: "MERN Stack",
      text: "Ich bin versiert im MERN-Stack, einschließlich MongoDB, Express.js, React und Node.js.",
      image: 'src/assets/mern-stack.png'
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