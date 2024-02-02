import React from 'react';
import "../assets/App.css"

const MessageDisplay = ({ message, addToFavorites }) => {
  return (
    <div className="message-display">
      {message && <p >{message}</p>}
      {message && (
        <button onClick={addToFavorites}>Favoris</button>
      )}
    </div>
  );
};

export default MessageDisplay;

