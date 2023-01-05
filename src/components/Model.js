import React from 'react';
import '@google/model-viewer'
import { motion } from 'framer-motion';

const Model = () => {

  return (
      <motion.div 
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}

      className='paint-window'>
        <div className="paint-window-container">

          <div className='paint-top-container'>
            <div className='paint-top-background'></div>
            <div className="paint-top-bar"></div>
            <div className='paint-top-background-highlight'></div>
          </div>

          <div className='paint-minus-container'>
            <div className='paint-minus-square-button'></div>
            <div className='paint-minus-left-highlight'></div>
            <div className='paint-minus-top-highlight'></div>
            <div className='paint-minus-sign'></div> 
          </div>
          
          <div className='paint-close-container'>
            <div className='paint-close-square-button'></div>
            <div className='paint-close-left-highlight'></div>
            <div className='paint-close-top-highlight'></div>
            <div className='paint-left-close-sign'></div>
            <div className='paint-right-close-sign'></div>
          </div>

          <div className='paint-maximize-container'>
            <div className='paint-maximize-square-button'></div>
            <div className='paint-maximize-top-highlight'></div>
            <div className='paint-maximize-left-highlight'></div>
            <div className='paint-right-maximize-sign'></div>
            <div className='paint-left-maximize-sign'></div>
            <div className='paint-top-maximize-sign'></div>
            <div className='paint-bottom-maximize-sign'></div>
          </div>
          
          <img alt="bottom half of retro paint window" class="paint-rest-window" src="/paint-window@1x.svg"></img>
        </div>

        <model-viewer alt="3D Model of an Old Retro Computer" id="computer" disable-zoom src="/retro-computer/source/lowres-computer.glb" ar
        ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1"
        shadow-softness="1" environment-image="/retro-computer/textures/black-square.webp" auto-rotate>
            <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
            </div>
        </model-viewer>
      </motion.div>
  );
}



export default Model;
