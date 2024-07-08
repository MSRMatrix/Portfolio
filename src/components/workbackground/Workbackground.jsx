import { useEffect, useState } from "react";
import "./workbackground.css";

const Workbackground = () => {
  const [topic, setTopic] = useState("topic");

  useEffect(() => {
    setTopic(topic + " enter-class");
  }, []);

  const history = [
    {
      info: "Berufsvorbereitungsjahr Holztechnik",
      year: "2015-2016"
    },
    {
      info: "Bildungswerk der Niedersächsischen Wirtschaft gGmbH ",
      year: "2017-2018"
    },
    {
      info: "Autohaus Trias GmbH",
      year: "1.08.2018 - 31.01.2023"
    },
    {
      info: "DCI Weiterbildung zum Web- und Softwareentwickler",
      year: "16.05.2023 - 23.07.2024"
    },
  ];

  return (
    <div className="information-container">
      <h1 className={topic}>Beruflicher Werdegang</h1>
      <div className="work-container">
        {history.map((item, index) => (
          <div key={index} className="work-div">
            <p className="work-text">{item.info}</p>
            <p className="work-text">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workbackground;
