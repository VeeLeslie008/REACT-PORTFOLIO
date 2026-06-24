import { developer } from "../Data/porfolio";
import logo from "../assets/profilem1.jpg";

function Footer(){
    const year = new Date().getFullYear()

    return(
        <footer className="footer">
            <div className="container footer__inner">
                <span className="footer__logo">
                    <img src={logo} alt="portfolio logo" className="footer__logo-img" />
                </span>

                <p className="footer__copy">©{year} {developer.name} . Built with React </p>


                <div className="footer__links">
                    <a href={developer.github} 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="footer__link">
                        Github
                    </a>

                    <a href={developer.linkedin} 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="footer__link">
                        Linkedin 
                    </a>

                    <a href={`mailto: ${developer.email}`}
                       className="footer__link">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;