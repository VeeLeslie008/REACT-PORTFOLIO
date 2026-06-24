import {useState, useEffect} from "react";
import { developer } from "../Data/porfolio";
import logo from "../assets/profilem1.jpg";

function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    //add border when user srolls down

    useEffect(() =>{
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // close menu when a link is clicked

    function handleNavClick(e, id){
        e.preventDefault()
        setMenuOpen(false)
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
    }


const links = ["About", "Skills", "Projects", "testimonials", "contact"]

return(
    <header className= {`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, "hero")}>
            <img src={logo} alt="portfolio Logo" />
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
            {links.map((link) => (
                <a key={link} 
                   href={`#${link}`}
                   className="navbar__link"
                   onClick={(e) => handleNavClick(e, link)}>
                    {link}
                   </a>
            ))}

            {developer.available &&(
                <span className="navbar__available">
                    <span className="navbar__dot"/>
                </span>
            )}
        </nav>

        {/* Mobile Hamburger */}
        <button 
            className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
        >
            <span/>
            <span/>
            <span/>
        </button>
        {/* Button Menu */}

        {menuOpen && (
            <div className="navbar__mobile">
                {links.map((link) => (
                    <a 
                        key={link} 
                        href={`#${link}`}
                        className="navbar__mobile-link"
                        onClick={(e) => handleNavClick(e, link)}
                        >
                            {link}
                        </a>
                ))}
            </div>
        )}
    </header>
);
}

export default Navbar;