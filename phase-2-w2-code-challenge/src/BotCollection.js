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
            };
            onAddBot(newBot);
        };
        //onAddBot(newBot);
        setName('');
        setHealth('');
        setBotClass('');    
        setArmor('');
        setAvatarUrl(''); 

    }   
    return(
        <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
            <h2>Your new army!</h2>
    
        </div>
    )
};
// BotCollection.js

