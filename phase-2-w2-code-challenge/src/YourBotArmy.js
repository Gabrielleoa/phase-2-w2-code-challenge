import React, { useState } from 'react';

const YourBotArmy = ({bots}) => {
    return (
        <div>
            <h2>Intergalactic Bot Army</h2>
            <div key ={bots.id}> 
            <h4>{bots.name}</h4>
            <h4><img src={bots.avatar_url} alt= {bots.name}/></h4>
            <h1>{bots.health}</h1>
            <h4>{bots.health}</h4>
            <h4>{bots.bot_class}</h4>


            </div>
        </div>
    )
}
// function YourBotArmy({bots}){
//     const handleClick = () => {
        
//     }
//     return(
//         <div style={{ marginTop: '40px' }}>
//             <h1>ROBOT ARMY</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Robot</th> <br></br>
//                         <th>Name</th> <br></br>
//                         <th>Health</th> <br></br>
//                         <th>Bot Class</th> <br></br>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bots.map((bots) => (
                        
//                         <tr key={bots.id}>
//                             <td>
//                                 <img src={bots.avatar_url} alt= {bots.name}/></td> <br></br>                                
//                             <td>{bots.name} <br></br></td>
//                             <td>{bots.health} <br></br></td> 
//                             <td>{bots.bot_class}<br></br> </td> 
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div id='edit' onClick={handleClick} style={{cursor:'pointer'}}></div>
//         </div>
//     )
// }
export default YourBotArmy;
