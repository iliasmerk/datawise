import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { Grid } from '@mantine/core';
function App() {

  return (
    <div className="App"> 
    <MantineProvider>
          <Grid>
              <Grid.Col span={4}>1</Grid.Col>
              <Grid.Col span={4}>2</Grid.Col>
              <Grid.Col span={4}>3</Grid.Col>
          </Grid>
    </MantineProvider>
    </div>
  );
}

export default App;
