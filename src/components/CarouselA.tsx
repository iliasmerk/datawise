import React from 'react';    
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import {  MantineProvider } from '@mantine/core';
import './CarouselA.css'; 
import data from './data.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes()
var realfeel="";
var wind="";
var changeofrain="";
var uv=""; 
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
let day = days[today.getDay()];  
{data['New York'].map((newyork) => { 
  if(newyork.day===day){
    realfeel=newyork.realfeel;
    wind=newyork.wind;
    changeofrain=newyork.changeofrain;
    uv=newyork.UVIndex.toString();
  }
})}  
function CarouselA() { 
  return (
    <div className="backtoground">
        <MantineProvider  > 
        <Carousel
          withIndicators
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
         {drawdays()}
         </Carousel> 
        </MantineProvider>
        <div className='mtop20'>
          <FontAwesomeIcon className='mright10' icon={faClock} />
          <span>{time.toString()} GMT</span> 
        </div>
        <div className='leftalign'>
        <div className='mtop40 leftalign'> 
              <span className='aircond'>AIR CONDITIONS</span>
          </div>
          <div className='mtop20 leftalign'>
              <FontAwesomeIcon className='mright10' icon={faTemperatureThreeQuarters} />
              <span className='pao'>Real Feel</span>
              <div>{realfeel}</div>
          </div>
          <div className='mtop40 leftalign'>
              <FontAwesomeIcon className='mright10' icon={faWind} />
              <span className='pao'>Wind</span>
              <div>{wind}</div>
          </div>
          
          <div className='mtop40 leftalign'>
              <FontAwesomeIcon className='mright10' icon={faDroplet} />
              <span className='pao'>Chance of rain</span>
              <div>{changeofrain}</div>
          </div>
          <div className='mtop40 leftalign'>
             <FontAwesomeIcon className='mright10' icon={faSun} />
              <span className='pao'>UV Index</span>
              <div>{uv}</div>
          </div>
        </div>
        
    </div>
  );
}
 
function drawdays() {    

    return data['New York'].map(function (newyork) { 
      var icon; 
      if (newyork.type==="Rainy"){ 
        icon=faCloudRain;
      }else if (newyork.type==="Cloudy"){ 
        icon=faCloud;
      } else { 
        icon=faSun;
      }
      return ( 
             <Carousel.Slide><span className=''>{newyork.day.toUpperCase().substring(0,3)} </span><div><FontAwesomeIcon className='' icon={icon} /></div></Carousel.Slide> 
      )
    
  }) 
}

export default CarouselA;
