import "./startsite.css";
import { useState, useEffect } from "react";

const Startsite = () => {
  const [topicDiv, setTopicDiv] = useState("topic");

  useEffect(() => {
    setTopicDiv(topicDiv + " enter-class");
  }, []);

  return (
    <div className="information-container">
      <div className={`${topicDiv} startsite-style`}>
        <h1>Web Developer</h1>
        <p>Hallo, ich bin Michael, ein motivierter Webentwickler, der sich auf die Erstellung von maßgeschneiderten, modernen und benutzerfreundlichen Websites spezialisiert hat. Mit meiner Leidenschaft für Technologie und meinem Engagement für erstklassige Qualität helfe ich Ihnen, Ihre Online-Präsenz auf das nächste Level zu heben."</p>
      </div>
    </div>
  );
};

export default Startsite;