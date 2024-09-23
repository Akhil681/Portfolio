import React from 'react';
import './Service.css'; // Import the CSS file
import webd from "./webd.png";
import webdes from "./webdes.png"
import appdes from "./appdes.png"
import gdes from "./gdes.png"

function Service() {
  return (
    <>
    <div className='bg-top' data-aos="fade-right"> </div>
    <div className='bg-top1' data-aos="fade-right"> </div>
    <div className='bg-btm' > </div>
    <div className='bg-btm1'> </div>
    <div className="service-container">
        
      <div className="planet" id="planet1">
        
        <img src={webd} alt='Background Image' id="planet1" className='planet-img' /> 
        
      </div>
      <div className="planet" id="planet2">
      <img src={webdes} alt='Background Image' id="planet1" className='planet-img' />
      </div>
      <div className="planet" id="planet3">
      <img src={appdes} alt='Background Image' id="planet1" className='planet-img' />
      </div>
      <div className="planet" id="planet4">
      <img src={gdes} alt='Background Image' id="planet1" className='planet-img' />
      </div>
      <div className="service-text">
        <h4>SERVICES</h4>
      </div>
    </div>
    </>
  );
}

export default Service;
