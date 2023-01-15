import React from "react";
import { motion } from "framer-motion";

const ContactSuccess = () => {

    return (
        <div className="contact-page">
            <div className="contact-half">
                <div className="contact-contatiner">
                    <motion.div 
                    initial={{opacity: 0,}}
                    animate={{opacity: 1,}}
                    transition={{duration: 0.5}}
                    className="contact-success">
                        <h1>Thank you for your submission!</h1>
                    </motion.div>
                </div>
            </div>
        </div>

    )

}

export default ContactSuccess;