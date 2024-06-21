import React from 'react';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ControlPanel.css'; 


function ControlPanel() { 
  return ( 
        <div className='backtoground ls'>
              <div className='pointer'><FontAwesomeIcon className="fsize60" icon={faCloud} /><div><span>weather</span></div></div>
              <div className='pointer movetop100'><FontAwesomeIcon className="fsize60" icon={faCompass} /><div><span>explore</span></div></div>
              <div className='pointer movetop100'><FontAwesomeIcon className="fsize60" icon={faLocationDot} /><div><span>cities</span></div></div>
              <div className='pointer movetop100'><FontAwesomeIcon className="fsize60" icon={faGear} /><div><span>settings</span></div></div>
        </div>
  );
}
  
export default ControlPanel;
