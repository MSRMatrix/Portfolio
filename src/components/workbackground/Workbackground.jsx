import { useEffect, useState } from "react";
import "./workbackground.css";

import tischler from "/src/assets/tischler.png"
import carMechanic from "/src/assets/car-mechanic.png"
import webDev from "/src/assets/web-dev.png"
import meFrom2017 from "/src/assets/me-from-2017.png"

const Workbackground = () => {
  const [topic, setTopic] = useState("topic");

  useEffect(() => {
    setTopic(topic + " enter-class");
  }, []);

  const history = [
    {
      info: "Berufsvorbereitungsjahr Holztechnik 2015-2016",
      img: tischler,
    },
    {
      info: "Bildungswerk der Niedersächsischen Wirtschaft gGmbH 2017-2018",
      img: meFrom2017,
    },
    {
      info: "Autohaus Trias GmbH 1.08.2018 - 31.01.2023",
      img: carMechanic,
    },
    {
      info: "DCI Weiterbildung zum Web- und Softwareentwickler 16.05.2023 - 23.07.2024",
      img: webDev,
    },
  ];

  return (
    <div className="information-container">
      <h1 className={topic}>Beruflicher Werdegang</h1>
      <div className="work-container">
        {history.map((item, index) => (
          <div key={index} className="work-div">
            <img src={item.img} alt="" />
            <p className="work-text">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workbackground;
