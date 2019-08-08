import React, { useState } from 'react';
import './App.css';
import Dashboard from "./utility/Dashboard"; 

function App() {

  const [ strikes, setStrikes ] = useState(0); 
  const [ balls, setBalls ] = useState(0); 
  const [ fouls, setFouls ] = useState(0); 
  const [ hits, setHits ] = useState(0); 

  const handleStrikes = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0); 
    }
    console.log(strikes); 
  } 

  const handleBalls = () => {
    if(balls < 3) {
      setBalls(balls + 1); 
    } else {
      setBalls(0); 
      setFouls(0); 
      setStrikes(0); 
    }
    console.log(balls); 
  }

  const handleFouls = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1); 
    }
    console.log(fouls); 
  }

  const handleHit = () => {
    setHits(hits + 1); 
    setStrikes(0); 
    setBalls(0); 
    setFouls(0); 
  }
  

  return (
    <div className="App">
      <Dashboard 
      handleHit={handleHit} 
      handleBalls={handleBalls} 
      handleStrikes={handleStrikes} 
      handleFouls={handleFouls}
      strikes={strikes}
      balls={balls}
      fouls={fouls}
      hits={hits}
      />
    </div>
  );
}

export default App;
