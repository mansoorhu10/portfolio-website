import React from "react";
import { motion } from "framer-motion";

const ContactSuccess = () => {

    return (
        <motion.div 
        initial={{opacity: 0,}}
        animate={{opacity: 1,}}
        transition={{duration: 0.5}}
        className="contact-success">
            <h1>Thank you for the submission!</h1>
        </motion.div>
    )

}

export default ContactSuccess;