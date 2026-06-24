import { testimonials } from "../Data/porfolio";

function Testimonials(){
    return(
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <p className="section__label">Testimonials</p>
                <h2 className="section__heading">What people say.</h2>

                <div className="testimonial__grid">
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial-card">
                            <span className="testimonial-card__quote" aria-hidden="true">"</span>
                            <p className="testimonial-card__text">{t.text}</p>

                            <div className="testimonial-card__author">
                                <div className="testimonial-card__avatar">{t.avatar}</div>
                                <div className="testimonial-card__meta">
                                    <span className="testimonial-card__name">{t.name}</span>
                                    <span className="testimonial-card__role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;