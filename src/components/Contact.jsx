import { useState } from "react";
import {developer} from "../Data/porfolio";

function Contact(){
    const [form, setForm] = useState({ name: "", email: "", message: ""});
    const [status, setStatus] = useState("idle");

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!form.name || !form.email || !form.message) return

        setStatus("Sending")

        // Simulate a network request with setTimeout
        setTimeout(()=>{
            setStatus("Sent")
            setForm({name: "", email: "", message: ""})
        }, 1200)
    }

    return(
        <section id="contact" className="section contact">
            <div className="container">
                <p className="section__label">Contacts</p>
                <h2>Let's work together.</h2>

                <div className="contact__grid">
                    {/* left-copy */}
                    <div className="contact__left">
                        <p className="contact__intro">
                            I'm currently available for frelance projects and full-time roles. If you have something in mind, let's talk
                        </p>
                        <div className="contact__details">
                            <a href={`mailto:${developer.email}`} className="contact__detail">
                                <span className="contact_detail-label">Email</span>
                                <span className="contact__detail-value">{developer.email}</span>
                            </a>

                            <a href={developer.github} target="_blank" rel="noopener moreferrer" className="contact__detail">
                                <span className="contact_detail-label">Github</span>
                                <span className="contact__detail-value">github.com/veeleslie</span>
                            </a>

                            <a href={developer.linkedin} target="_blank" rel="noopener moreferrer" className="contact__detail">
                                <span className="contact_detail-label">LinkedIn</span>
                                <span className="contact__detail-value">linkedin.com/in/veeleslie</span>
                            </a>
                        </div>
                    </div>

                    {/* Right - form */}

                    <div className="contact__right">
                        {status === "sent" ?(
                            <div className="contact__success">
                                <span className="contact__success-icon">✔</span>
                                <p>Message Sent. I'll be in touch shortly.</p>
                            </div>
                        ):(
                            <form className="contact__form" onClick={handleSubmit}>
                                <div className="form__row">
                                    <div className="form__field">
                                        <label htmlFor="name" className="form__field">Name :</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className="form__input"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>

                                    <div className="form__field">
                                        <label htmlFor="name" className="form__field">Email :</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className="form__input"
                                            placeholder="Your Email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="form__message">
                                        <label htmlFor="name" className="form__field">Message :</label>
                                        <textarea 
                                            type="text" 
                                            id="message" 
                                            name="message" 
                                            className="form__textarea"
                                            placeholder="Additional information about Project"
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                <button
                                    type="submit"
                                    className="btn btn--primary"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "sending..." : "Send message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Contact;