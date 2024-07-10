import { useEffect, useState } from "react";
import "./workbackground.css";

const Workbackground = () => {
  const [topic, setTopic] = useState("topic enter-class");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const history = [
    {
      info: "Berufsvorbereitungsjahr Holztechnik",
      year: "2015-2016",
      about: "Während des Berufsvorbereitungsjahres in der Holztechnik wurde ein grundlegendes Verständnis für die Arbeit mit Holz vermittelt. Dies umfasste theoretische und praktische Kenntnisse in der Holzbearbeitung, die Bedienung von Maschinen und Werkzeugen sowie die Erstellung und Umsetzung von technischen Zeichnungen."
    },
    {
      info: "Bildungswerk der Niedersächsischen Wirtschaft gGmbH ",
      year: "2017-2018",
      about: "Bei der Bildungswerk der Niedersächsischen Wirtschaft gGmbH wurde eine umfassende berufliche Weiterbildung absolviert. Der Fokus lag auf der beruflichen Integration und der Entwicklung von Schlüsselkompetenzen, wie z.B. Teamarbeit, Projektmanagement und Kommunikation."
    },
    {
      info: "Autohaus Trias GmbH",
      year: "1.08.2018 - 31.01.2023",
      about: "Während der Tätigkeit bei der Autohaus Trias GmbH wurden umfangreiche Erfahrungen in der Automobilbranche gesammelt. Verantwortlichkeiten umfassten den Kundenservice, die Fahrzeugwartung und -reparatur sowie die Koordination von Werkstattterminen."
    },
    {
      info: "DCI Weiterbildung zum Web- und Softwareentwickler",
      year: "16.05.2023 - 23.07.2024",
      about: "Die Weiterbildung bei DCI konzentriert sich auf die Ausbildung zum Web- und Softwareentwickler. Der Lehrplan umfasst eine Vielzahl von Programmiersprachen und Technologien, darunter HTML, CSS, JavaScript, React, Node.js und Datenbankmanagement."
    },
  ];

  const indexCatcher = (index) => {
    if (windowWidth < 400) {
      return `${(index + 2) * 8}%`;
    }
    return `${(index + 2) * 10}%`;
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="information-container">
      <h1 className={topic}>Beruflicher Werdegang</h1>
      <div className="work-container">
        {history.map((item, index) => (
          <div
            key={index}
            style={{
              width: indexCatcher(index + 4),
              height: indexCatcher(index),
              backgroundColor: hoveredIndex === index ? getRandomColor() : ""}}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="work-div"
          >
            <div className="the-infos">
              <p className="hidden-about-text">{item.about}</p>
              <p className="work-text">{item.info}</p>
              <p className="work-text">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workbackground;
