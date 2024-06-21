import React from 'react';   
import './Activities.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import hiking from './images/hiking.jpg';
import walk from './images/walk.jpg';
import waterpark  from './images/waterpark.jpg'; 
import beach  from './images/beach.jpg'; 
import data from './activities.json';



function drawactivities() {    

  return data['Activities'].map(function (activities) {
    var image; 
    if(activities.image==='hiking.jpg'){
      image=hiking;
    } 
    else if(activities.image==='walk.jpg'){
      image=walk;
    } 
    else if(activities.image==='waterpark.jpg'){
      image=waterpark;
    } 
    else{
      image=beach;
    }
    return (
      <div > 
            <img src={image} alt={activities.type} />   
            <span className='black'>{activities.distance} </span>
      </div>
    )
  
})
}

function Activities() { 
  return (
        <div className="backtoground">
          <FontAwesomeIcon className='font30 mrigh10' icon={faHeart} />
          <span className='font30'>Activities in your area</span>
          <div  className="mtop50 radius grid grid-cols-[25%_25%_25%_25%] grid-rows-1 gap-4">  
          {drawactivities()}
          </div>
        </div> 
  );
}

 

export default Activities;
