import React, { useEffect, useState } from "react";
import BotCollection from './BotCollection';

function App() {
  const [botArmy, setBotArmy] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:8001/bots')
  .then((response) => response.json())
  .then((data) => setBotArmy(data));
  
}, []);

const handleAddBots = (newBot) => {
  setBotArmy([...botArmy, newBot]);
};
return (
  <div>
    
      <h1 color='red'>Intergalactic Bot Army</h1>
      <BotCollection onAddBot={handleAddBots}/>
    
  </div>
)

}

  
export default App;
