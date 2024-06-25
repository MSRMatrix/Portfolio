import "./startsite.css";
import { useState, useEffect } from "react";

const Startsite = () => {
  const [topicDiv, setTopicDiv] = useState("topic");

  useEffect(() => {
    setTopicDiv(topicDiv + " enter-class");
  }, []);

  return (
    <div className="information-container">
      <div className={topicDiv}>
        <h1>Michael</h1>
        <h2>Ich präsentiere die Zukunft der Web Developer Branche!</h2>
      </div>
    </div>
  );
};

export default Startsite;