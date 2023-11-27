import React from 'react';
const Bots = ({ bots, onClick, onRemove }) => {
    return (
      <div>
        <h2>Bot Collection</h2>
        {bots.map((bots) => (
          <Bots key={bots.id} bot={bots} onCl={onClick} onRemove={onRemove} />
        ))}
      </div>
    );
  };
  export default Bots;