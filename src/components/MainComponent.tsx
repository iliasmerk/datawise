import React from 'react';  
import data from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'; 
import './MainComponent.css'; 
import Activities from './Activities';
import CarouselA from './CarouselA'; 
import rainy from './images/rainy.jpg';
import sunny from './images/sunny.jpg';
import cloudy  from './images/cloudy.jpg'; 
import Hourly from './Hourly';
 

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = days[d.getDay()];  
let todaysweather:any={};
let myStyle = {};
let icon = "";
{data['New York'].map((newyork) => {
  if(newyork.day===day){
    todaysweather = JSON.parse(JSON.stringify(newyork)); 
    if (newyork.type==="Rainy"){
      myStyle = {
        backgroundImage:"url("+rainy+")"  
      }
      icon="faCloudRain";
    }else if (newyork.type==="Cloudy"){
      myStyle = {
        backgroundImage:"url("+cloudy+")"  
      }
      icon="faCloud";
    } else {
      myStyle = {
        backgroundImage:"url("+sunny+")"  
      }
      icon="faSun";
    }
  }
})}  
 

function MainComponent() { 
  return ( 
    <div  className="main-container"> 
        <div  style={myStyle} className="radius grid grid-cols-[80%_20%] grid-rows-1 gap-4">
            <div className="left-container">
              <div className='pt90 heightfirst'>
                  <div className='bold font20'><FontAwesomeIcon icon={faLocationDot} /> New York </div>
                  <div className='bold font30'>{todaysweather['type']}</div>
                  <div className='bold font40 mtop100'>{todaysweather['temperature']} °C</div> 
                  <div className='font20'>{day} | {GetCurrentdate()}</div>
              </div> 
              <Activities></Activities>
              <div className='maxheigh backtoground'><FontAwesomeIcon  className='mright10' icon={faClock} /><span >24-hour forecast</span><Hourly ></Hourly></div> 
            </div>
            <div className="right-container">
              <div className='heightfirst pt60'>
              {SwitchIco(icon)}
              </div>
              <CarouselA></CarouselA>
            </div>
        </div>
    </div> 
  );
}

function SwitchIco(param:any) { 
  switch(param) {
    case 'faCloudRain':
      return <FontAwesomeIcon className='font95' icon={faCloudRain} />
    case 'faCloud':
      return <FontAwesomeIcon className='font95' icon={faCloud} />
    default:
      return <FontAwesomeIcon className='font95' icon={faSun} />;
  }
}

function GetCurrentdate() {
  let currentdate=new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr",
                      "May", "Jun", "Jul", "Aug",
                      "Sep", "Oct", "Nov", "Dec"];
  
  const day = currentdate.getDate();
  
  const monthIndex = currentdate.getMonth();
  const monthName = monthNames[monthIndex];
  
  const year = currentdate.getFullYear();
  
  return `${day} ${monthName} ${year}`;  
}


export default MainComponent;



