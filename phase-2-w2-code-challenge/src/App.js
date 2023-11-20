import React, { useEffect, useState } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:8001/bots')
  .then((response) => response.json())
  .then((data) => setBots(data));
  
}, []);

const handleAddBots = (newBot) => {
  setBots([...bots, newBot]);
};
return (
  <div>
    
      <h1>Intergalactic Bot Army</h1>
      <BotCollection onAddBot={handleAddBots}/>
      <YourBotArmy bots={bots}/>
    
  </div>
)

}

  
export default App;

// App.js