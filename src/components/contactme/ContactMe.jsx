import { useEffect, useState } from "react";
import "./contactme.css";

const ContactMe = () => {
  const [topic, setTopic] = useState("topic");

  const icons = [
    {
      name: "Xing",
      url: "https://www.xing.com/profile/Michael_Rolo072639",
      className: "fa-brands fa-xing fa-shake"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/michael-santos-rolo-884960298/",
      className: "fa-brands fa-linkedin-in fa-shake"
    },
    {
      name: "GitHub",
      url: "https://github.com/MSRMatrix?tab=overview&from=2023-04-01&to=2023-04-30",
      className: "fa-brands fa-github fa-shake"
    }
  ];

  useEffect(() => {
    setTopic(topic + " enter-class");
  }, []);

  return (
    <div className="information-container">
      <h1 className={topic}>Kontaktiere mich!</h1>
      <div className="contact-text-block">
        <div className="contact-inner-text-block">
          <h3>Email:</h3>
          <p>michaelrolo11@gmail.com</p>
        </div>
        <div className="contact-inner-text-block">
          <h3>Handynummer:</h3>
          <p>+49 1520 3064584</p>
        </div>
        <div className="contact-inner-text-block">
          <h3>Plattformen:</h3>
          <div className="icon-container">
            <i className="fas fa-hand-point-right"></i>
            {icons.map((icon, index) => (
              <div key={index} className="icon-text-box">
                <a target="_blank" rel="noopener noreferrer" href={icon.url}>
                  <i className={icon.className}></i>
                  <p>{icon.name}</p>
                </a>
              </div>
            ))}
            <i className="fas fa-hand-point-left"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
