import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
function App() {
  const [bots, setBots] = useState([]);
  const [clickedBots, setClickedBots]= useState([]);
//   useEffect(()=> {
//     fetch('http://localhost:8001/bots')
//   .then((response) => response.json())
//   .then((data) => setBots(data));
  
// }, []);

const clickBots = (bots) => {
  if (!clickedBots.includes(bots)){
    setClickedBots([...clickedBots, bots]);
  }

};

const removeBots = (bots) => {
  setClickedBots(clickedBots.filter((clickedBot) => clickedBot !== bots));
};
useEffect(()=> {
  fetch('http://localhost:8001/bots')
.then((response) => response.json())
.then((data) => setBots(data));

}, []);



// const handleAddBots = (newBot) => {
//   setBots([...bots, newBot]);
// };
return (
  <div>
     <h1>Intergalactic Bot Army</h1>
      <BotCollection/>
      {/* <YourBotArmy bots={bots}/> */}
    {bots.map((bots) => (
      <div key ={bots.id}>
        <h3>{bots.name}</h3>
        <h4><img src={bots.avatar_url} alt= {bots.name}/></h4>
        <button onClick={() => clickBots(bots)}>Enroll</button>
        <button onClick={() => removeBots(bots)}>Release</button>

      </div>
    ))}
      <h1>Intergalactic Bot Army</h1>
      <BotCollection/>
      <YourBotArmy bots={bots}/>
    
  </div>
)

}

  
export default App;

// App.js