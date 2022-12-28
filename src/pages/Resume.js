import React from "react";
import { motion } from "framer-motion";

const Resume = () => {

    return (
        <div className="resume-page">
            <motion.div    
                initial={{scale: 0.2, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1}}
            className="resume-window">
                <div className="top-container">
                    <div className="contact-top-background"></div>
                    <div className="resume-top-bar"></div>
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
                    <div className="resume-document">
                    <iframe 
                        title="Mansoor Syed - 2022 Resume"
                        src="https://docs.google.com/document/d/e/2PACX-1vRDai7aMjDjmbnunJ_LsHel3WloReuDfi7DGHmGXRp835imdpU1jc9a0yLnu3_IMg/pub?embedded=true"
                        height="1400px"
                        width="800px"
                        style={{borderTop: "2px", borderLeft: "2px", borderRight: "0px", borderBottom: "0px"}}
                    ></iframe>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Resume;