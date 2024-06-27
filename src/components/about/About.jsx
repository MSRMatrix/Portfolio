import { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [topic, setTopic] = useState("topic");

  useEffect(() => {
    setTopic(topic + " enter-class");
  }, []);

  return (
    <div className="information-container">
      <h1 className={topic}>Über mich</h1>
      <div className="text-block">
        <div className="inner-text-block">
          <h3>Name :</h3>
          <p>Michael Santos Rolo</p>
        </div>
        <div className="inner-text-block">
          <h3>Geburtsdatum :</h3>
          <p>07.10.1998 </p>
        </div>
        <div className="inner-text-block">
          <h3>Geburtsort :</h3>
          <p>Deutschland, Quakenbrück</p>
        </div>
        <div className="inner-text-block">
          <h3>Staatsangehörigkeit :</h3>
          <p>Portugiesisch</p>
        </div>
      </div>
    </div>
  );
};

export default About;
