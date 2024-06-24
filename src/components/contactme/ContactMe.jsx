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
        <p>Weiteres: Github</p>
    </div>
        
    )
}

export default ContactMe