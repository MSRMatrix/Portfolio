import { useEffect, useState } from "react";
import "./contactme.css"

const ContactMe = () => {
    const [topic, setTopic] = useState("topic");


    useEffect(() => {
        setTopic(topic + " enter-class")
    },[])
    return(
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
          <a target="_blank" rel="noopener noreferrer" href="https://www.xing.com/profile/Michael_Rolo072639"><i className="fa-brands fa-xing fa-shake"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-santos-rolo-884960298/"><i className="fa-brands fa-linkedin-in fa-shake"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/TwinMine?tab=overview&from=2023-04-01&to=2023-04-30"><i className="fa-brands fa-github fa-shake"></i></a>  
          </div> 
        </div>
      </div>
        
    </div>
        
    )
}

export default ContactMe