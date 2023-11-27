import React, { useState } from 'react';
import Bots from './Bots';
export default function BotCollection({onClicked, onRemove}){
    const [clickedBots, setClickedBots]= useState([]);
    
    const [bots, setBots] = useState([]);
    const [name, setName] = useState('');
    const [health, setHealth] = useState('');
    const [bot_class, setBotClass] = useState('');
    const [armor, setArmor] = useState('');
    const [avatar_url, setAvatarUrl] = useState('');
    
    const clickBots = (bots) => {
        if (!clickedBots.find((clickedBots) => clickedBots.id === bots.id)){
          setClickedBots([...clickedBots, bots]);
        }
      
      };
      
      const removeBots = (bots) => {
        setClickedBots(clickedBots.filter((clickedBot) => clickedBot !== bots));
     
    return(
        <div>
         <div>
         <h2>Bot Collection</h2>
      {bots.map((bots) => (
        <Bots key={bots.id} bot={bots} onClicked={onClicked} onRemove={onRemove} />
      ))}
         </div>
        <div className="bot-actions">
        <button onClick={() => clickBots(bots)}>Enroll</button>
        <button onClick={() => removeBots(bots)}>Release</button>
        </div>
        </div>
    )
            }

// BotCollection.js}
        }
