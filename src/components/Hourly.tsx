import React from 'react';  
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'now', 
    celcius: 26
  },
  {
    name: '22:00', 
    celcius: 26
  },
  {
    name: '00:00', 
    celcius: 22
  },
  {
    name: '2:00', 
    celcius: 16
  },
  {
    name: '4:00', 
    celcius: 20
  },
  {
    name: '6:00', 
    celcius: 22
  },
  {
    name: '8:00', 
    celcius: 16
  },
];


function Hourly() { 
  return ( 
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend /> 
              <Line type="monotone" dataKey="celcius" stroke="black" />
            </LineChart>
          </ResponsiveContainer>  
  );
}
  
export default Hourly;
