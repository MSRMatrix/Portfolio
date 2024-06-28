import "./abilities.css";
import html from "/src/assets/html-ai.png";
import css from "/src/assets/css3.png";
import js from "/src/assets/js.png";
import mernStack from "/src/assets/mern-stack.png";
import python from "/src/assets/python.png";
import scss from "/src/assets/scss.png";
import typescript from "/src/assets/typescript.png";
import { useEffect, useState } from "react";

const Abilities = () => {
  const [icon, setIcon] = useState(
    <i className="fa-solid fa-hourglass-start"></i>
  );
  const [topic, setTopic] = useState("h1-from-abilities topic");
  const [imageContainer, setImageContainer] = useState("picture-div");
  const [imgAnimation, setImgAnimation] = useState("img-class");
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
    {
      name: "SCSS",
      image: scss,
    },
  ];

  const inProgress = [
    {
      name: "PYTHON",
      image: python,
    },
    {
      name: "TypeScript",
      image: typescript,
    },
  ];

  useEffect(() => {
    setTopic(topic + " enter-class");
    setImageContainer(imageContainer + " show-img");
    setImgAnimation(imgAnimation + " img-animation");
    const icons = [
      <i className="fa-solid fa-hourglass-start"></i>,
      <i className="fa-solid fa-hourglass-half"></i>,
      <i className="fa-solid fa-hourglass-end"></i>,
    ];

    let index = 0;

    const interval = setInterval(() => {
      setIcon(icons[index]);
      index = (index + 1) % icons.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="information-container">
      <h1 className={topic}>Meine Developer Fähigkeiten</h1>
      <div className="img-container">
        {skills.map((skill) => (
          <div key={skill.name} className={imageContainer}>
            <img src={skill.image} alt={skill.name} className={imgAnimation} />
            <h3 className="sand-clock">
              {skill.name}
              <i className="fa-solid fa-check"></i>
            </h3>
          </div>
        ))}
      </div>
      <h1 className={topic}>Lernphase</h1>
      <div className="img-container">
        {inProgress.map((skill) => (
          <div key={skill.name} className={imageContainer}>
            <img src={skill.image} alt={skill.name} className={imgAnimation} />
            <h3 className="sand-clock">
              {skill.name}
              {icon}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
