import React from 'react';
import '@google/model-viewer'

const Model = () => {

  return (
    <div className='paint-window'>
      <div className="paint-window-container">
        <div className='paint-top-background'></div>
        <div className="paint-top-bar"></div>
        <div className='paint-minus-square-button'></div>
        <div className='paint-close-square-button'></div>
        <div className='paint-maximize-square-button'></div>
        <div className='paint-minus-left-highlight'></div>
        <div className='paint-minus-top-highlight'></div>
        <div className='paint-maximize-top-highlight'></div>
        <div className='paint-maximize-left-highlight'></div>
        <div className='paint-close-left-highlight'></div>
        <div className='paint-close-top-highlight'></div>
        <div className='paint-minus-sign'></div>
        <div className='paint-right-maximize-sign'></div>
        <div className='paint-left-maximize-sign'></div>
        <div className='paint-top-maximize-sign'></div>
        <div className='paint-bottom-maximize-sign'></div>
        <div className='paint-left-close-sign'></div>
        <div className='paint-right-close-sign'></div>
        <div className='paint-top-background-highlight'></div>

        <img alt="bottom half of retro paint window" class="paint-rest-window" src="/paint-window@1x.svg"></img>
      </div>

      <model-viewer alt="3D Model of an Old Retro Computer" id="computer" className="computer" disable-zoom src="/retro-computer/source/lowres-computer.glb" ar
      ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1"
      shadow-softness="1" environment-image="/retro-computer/textures/black-square.webp" auto-rotate>
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>  
      </model-viewer>
    </div>
  );
}



export default Model;
