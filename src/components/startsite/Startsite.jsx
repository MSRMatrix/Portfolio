import "./startsite.css";
import kiMan from "/src/assets/ki-man.png"
import kiWoman from "/src/assets/ai-woman.png"
import { useState, useEffect } from "react";

const Startsite = () => {
  const [topicDiv, setTopicDiv] = useState("topic-div");
  const [pics, setPics] = useState("startsite-image");

  useEffect(() => {
    setTopicDiv(topicDiv + " enter-class");
    setPics(pics + " pic-animation");
  }, []);

  return (
    <div className="information-container">
      <div className={topicDiv}>
        <h1>Michael</h1>
        <h2>Ich präsentiere die Zukunft der Web Developer Branche!</h2>
      </div>
      <div className="ki-div">
        <img className={pics} src={kiMan} alt="ki-man" />
        <img className={pics} src={kiWoman} alt="ki-man" />
      </div>
    </div>
  );
};

export default Startsite;