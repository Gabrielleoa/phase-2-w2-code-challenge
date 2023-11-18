import React, { useEffect, useState } from "react";
//import BotCollection from './BotCollection';

function App() {
  const [botArmy, setBotArmy] = useState([]);
  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/gabrielleoa/phase-2-w2-code-challenge')
  .then((response) => response.json())
  .then((data) => setBotArmy(data));
}, []);

const handleAddBots = (newBot) => {
  setBotArmy([...botArmy, newBot]);
};
return (
  <div>
    <h1>
      <h1 color='red'>Intergalactic Bot Army</h1>
      {/*<BotCollection onAddBot={handleAddBots}/>*/}
    </h1>
  </div>
)

}

  
export default App;
