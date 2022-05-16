import React from 'react';
import Input from './component/Input/index';
import './App.css';
import Header from './component/Header/index';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Header />
        <Input />
      </Grid>
    </div>
  );
}

export default App;
