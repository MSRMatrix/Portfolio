import { useEffect, useState } from "react";

const ContactMe = () => {
    const [topic, setTopic] = useState("topic");


    useEffect(() => {
        setTopic(topic + " enter-class")
    },[])
    return(
    <div className="information-container">
        <h1 className={topic}>Kontaktiere mich!</h1>
        <p>Email: michaelrolo11@gmail.com</p>
        <p>Handynummer: 49 01520 3064584</p>
        <p>Plattformen: 
        <a target="_blank" rel="noopener noreferrer" href="https://www.xing.com/profile/Michael_Rolo072639"><i className="fa-brands fa-xing fa-shake"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-santos-rolo-884960298/"><i className="fa-brands fa-linkedin-in fa-shake"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/TwinMine?tab=overview&from=2023-04-01&to=2023-04-30"><i className="fa-brands fa-github fa-shake"></i></a></p>
    </div>
        
    )
}

export default ContactMe