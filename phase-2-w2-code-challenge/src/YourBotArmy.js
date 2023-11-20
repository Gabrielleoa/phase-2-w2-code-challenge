import React, { useState } from 'react';
function YourBotArmy({bots}){
    return(
        <div style={{ marginTop: '40px' }}>
            <h1>ROBOT ARMY</h1>
            <table>
                <thead>
                    <tr>
                        <th>Robot</th> <br></br>
                        <th>Name</th> <br></br>
                        <th>Health</th> <br></br>
                        <th>Bot Class</th> <br></br>
                    </tr>
                </thead>
                <tbody>
                    {bots.map((bots) => (
                        
                        <tr key={bots.id}>
                            <td>
                                <img src={bots.avatar_url} alt= {bots.name}/></td> <br></br>                                
                            <td>{bots.name} <br></br></td>
                            <td>{bots.health} <br></br></td> 
                            <td>{bots.bot_class}<br></br> </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default YourBotArmy;
