import { useState, useEffect} from "react";
import "./about.css"

const About = () => {
    const [topic, setTopic] = useState("topic");

    useEffect(() => {
        setTopic(topic + " enter-class")
    },[])

    return(<div className="information-container">
    <h1 className={topic}>Über mich</h1>
    <p>Name: Michael Santos Rolo</p>
    <p>Geburtsdatum: 07.10.1998 </p>
    <p>Geburtsort: Deutschland, Quakenbrück</p>
    <p>Staatsangehörigkeit: Portugiesisch</p>
    </div>   
    )
}

export default About