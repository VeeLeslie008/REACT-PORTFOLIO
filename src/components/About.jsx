import { developer, about } from "../Data/porfolio";

function About(){
    return(
        <section id="about" className="section about">
            <div className="container">
                <div className="about__grid">
                    {/* Left Section Label and Heading */}
                    <div className="about__left">
                        <p className="section__label">About</p>
                        <h2 className="section__heading">
                            Building for the web, <br /> on purpose
                        </h2>

                        {/* Stats row */}
                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat_num">3+</span>
                                <span className="about__stat_label">Years experience</span>
                            </div>

                            {/* Project */}
                            <div className="about__stat">
                                <span className="about__stat_num">30+</span>
                                <span className="about__stat_label">Prijects shipped</span>
                            </div>

                            {/* Happy clients */}
                            <div className="about__stat">
                                <span className="about__stat_num">17+</span>
                                <span className="about__stat_label">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    {/* right - bio paragraphs */}
                    <div className="about__right">
                        {about.bio.map((para, i) => (
                            <p key={i} className="about__para">{para}</p>
                        ))} 

                        <a href= {`mailto:${developer.email}`} className="about__cta">
                            {developer.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;