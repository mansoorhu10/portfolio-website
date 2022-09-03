import React from "react";
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <div className="contact-page">
            <div className="contact-half">
                <div className="contact-container">

                    <div className="contact-box">

                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                        
                        className="contact-text">
                            <h1>Need to reach out?</h1>
                            <p>I would love to hear from you!</p>
                        </motion.div>


                        <div className="contact-right">
                            
                            <motion.div 
                                initial={{scale: 0.2, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{duration: 1, delay: 0.4}}
                                

                            className="contact-window">
                                <div id="handle" className="top-container">
                                    <div className="contact-top-background"></div>
                                    <div className="contact-top-bar"></div>
                                    <div className="contact-top-background-highlight"></div>
                                </div>
                                
                                <div className="close-container">
                                    <div className="contact-close-square-button"></div>
                                    <div className="contact-close-left-highlight"></div>
                                    <div className="contact-close-top-highlight"></div>
                                    <div className="contact-left-close-sign"></div>
                                    <div className="contact-right-close-sign"></div>
                                </div>
                                
                                <div className="contact-rest-window">
                                    <form className="contact-form">
                                    <div className="input-row">
                                        <div className="input-group">
                                            <label> Name: </label> 
                                            <input type="text" placeholder="John Doe" />
                                        </div>
                                        <div className="input-group">
                                            <label> Phone Number: </label>
                                            <input type="text" placeholder="+1 123 456 7890" />
                                        </div>
                                    </div>

                                    <div className="input-row">
                                        <div className="input-group">
                                            <label> Email Address: </label> 
                                            <input type="email" placeholder="youremail@gmail.com" />
                                        </div>
                                        <div className="input-group">
                                            <label> Subject </label>
                                            <input type="text" placeholder="Internship" />
                                        </div>

                                    </div>

                                    <div className="input-row">
                                        
                                            <label> Message </label>
                                            <textarea rows="5" placeholder="Your Message"></textarea>
                                        
                                    </div>
                                    

                                    <button class="submit-button" type="submit">Send</button>

                                    </form>
                                </div>
                            </motion.div>

                            

                        </div>
                        
                    </div>
                </div>
            </div>    
        </div>
    );

}

export default Contact;