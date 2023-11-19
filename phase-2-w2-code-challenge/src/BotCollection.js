import React, { useState } from 'react';
export default function BotCollection(onAddBot){
    const [name, setName] = useState('');
    const [health, setHealth] = useState('');
    const [bot_class, setBotClass] = useState('');
    const [armor, setArmor] = useState('');
    const [avatar_url, setAvatarUrl] = useState('');
    const handleAddBots= (event) => {
        event.preventDefault();
        if(name && health && bot_class && armor && avatar_url){
            const newBot = {
            name,
            health : (health),
            bot_class,
            armor : (armor),
            avatar_url
            };
            onAddBot(newBot);
        };
        onAddBot(newBot);
        setName('');
        setHealth('');
        setBotClass('');     
        
    }
    return (
        <div>
            <h2>YOUR ARMY !</h2>
            <form onClick={handleClick}>

            </form>
        </div>
    )


    
}