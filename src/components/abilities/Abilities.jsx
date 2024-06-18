import "./abilities.css";

const Abilities = () => {
  return (
    <div className="information-container">
      <h1>Meine Developer Fähigkeiten</h1>
      <div className="img-container">
        <div>
          <h1>Html</h1>
          <img src="src/assets/html.jpg" alt="Html Picture" />
        </div>
        <div>
          <h1>Css</h1>
          <img src="src/assets/css-small-icon.jpg" alt="Css Picture" />
        </div>
        <div>
          <h1>JS</h1>
          <img src="src/assets/javascript.jpg" alt="Javascript Picture" />
        </div>
        <div>
          <h1>Mern-Stack</h1>
          <img src="src/assets/Mern-Stack.jpeg" alt="Mern-Stack Picture" />
        </div>
      </div>
    </div>
  );
};

export default Abilities;
