import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import "./App.css"
function App() {
const[bots, setBots] = useState([]);
const[clickedBots, setClickedBots]= useState([]);


const clickBots = (bots) => {
  if (!clickedBots.find((clickedBot) => clickedBot.id === bots.id)) {
    setClickedBots([...clickedBots, bots]);
  }
};

const removeBots = (bots) => {
  setClickedBots(clickedBots.filter((clickedBot) => clickedBot !== bots));
};

useEffect(() => {
  fetch('http://localhost:8001/bots')
    .then((response) => response.json())
    .then((data) => setBots(data));
}, []);

return (
  <div className="container">
    <h1>Intergalactic Bot Army</h1>
    <BotCollection bots={bots} onEnroll={clickBots} onRelease={removeBots} />
    <YourBotArmy clickedBots={clickedBots} onRelease={removeBots} />
  </div>
);
}








  
export default App;

// App.js