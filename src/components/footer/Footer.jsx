import "./footer.css"

const Footer = () => {
    return(<div className="footer-container">
     <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Email: michaelrolo11@gmail.com</p>
          <p>Telefon: +49 01520 3064584</p>
        </div>
        <div className="footer-section">
          <h4>Wo ich aktiv bin</h4>
          <div className="social-icons">
          <a target="_blank" rel="noopener noreferrer" href="https://www.xing.com/profile/Michael_Rolo072639"><i className="fa-brands fa-xing fa-shake"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-santos-rolo-884960298/"><i className="fa-brands fa-linkedin-in fa-shake"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/TwinMine?tab=overview&from=2023-04-01&to=2023-04-30"><i className="fa-brands fa-github fa-shake"></i></a>
          </div>
        </div>
      </div>
    </footer>
    </div>  
    )
}

export default Footer