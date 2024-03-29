import React from "react";
import '../index.css';
import Typewriter from 'typewriter-effect';
import Draggable from 'react-draggable';
import { motion } from "framer-motion"
import { GitHub, LinkedIn } from "@mui/icons-material";

const Title = () => {

    return (
        <motion.div 
            initial={{ scale: 0.2, opacity: 0,}}
            animate={{ scale: 1, opacity: 1,}}
            transition={{ duration: 1 }}         
        
        className="invisible-border"> 
            <Draggable handle="#handle" bounds='parent' className='draggable-paint'>
                <div className="retro-window">

                    <div id="handle" className="top-container">
                        <div className="top-background"></div>
                        <div className="top-bar"></div>
                        <div className="top-background-highlight"></div>
                    </div>
                    
                    <div className="minus-container">
                        <div className="minus-square-button"></div>
                        <div className="minus-left-highlight"></div>
                        <div className="minus-top-highlight"></div>
                        <div className="minus-sign"></div>
                    </div>
                    
                    <div className="close-container">
                        <div className="close-square-button"></div>
                        <div className="close-left-highlight"></div>
                        <div className="close-top-highlight"></div>
                        <div className="left-close-sign"></div>
                        <div className="right-close-sign"></div>
                    </div>

                    <div className="maximize-container">
                        <div className="maximize-square-button"></div>
                        <div className="maximize-left-highlight"></div>             
                        <div className="maximize-top-highlight"></div>
                        <div className="top-maximize-sign"></div>
                        <div className="left-maximize-sign"></div>
                        <div className="bottom-maximize-sign"></div>
                        <div className="right-maximize-sign"></div>
                    </div>
                    
                    <div className="top-left">
                        <h1>Hey there, I'm Mansoor.</h1>
                        <h3><Typewriter 
                            options={{
                                strings: ["I'm a Software Developer.", "I'm a Coffee Connoisseur.", "I Love Creating Things."],
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                deleteSpeed: 50,
                                pauseFor: 3000,
                            }}
                        /></h3>
                        <div className="logo-container">
                            <div className="logo-child"><a href="https://github.com/mansoorhu10" target={"_blank"} rel="noreferrer"><GitHub /></a></div>
                            <div className="logo-child"><a href="https://www.linkedin.com/in/mansoor-syed-dev" target={"_blank"} rel="noreferrer"><LinkedIn /></a></div>
                        </div>
                    </div>
                    
                </div>
                
            </Draggable>
            
        </motion.div>
    );
}

export default Title;