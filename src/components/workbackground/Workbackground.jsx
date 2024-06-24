import { useEffect, useState } from "react";
import "./workbackground.css"

const Workbackground = () => {
    const [topic, setTopic] = useState("topic");
    useEffect(() => {
        setTopic(topic + " enter-class")
      }, []);

    return(<div className="information-container">
        <h1 className={topic}>Beruflicher Werdegang</h1>
     
        <p>Berufsvorbereitungsjahr Holztechnik 2015-2016</p>
        <p>BNW: Bildungswerk der Niedersächsischen Wirtschaft gGmbH 2017-2018 </p>
        <p>Autohaus Trias GmbH 1.08.2018 - 31.01.2023 </p>
        <p>DCI Weiterbildung zum Web- und Softwareentwickler 16.05.2023 -
        23.07.2024</p>
        
        
        
    </div>
        
    )
}

export default Workbackground