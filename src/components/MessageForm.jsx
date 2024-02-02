import React, { useState } from "react";
import "../assets/App.css";

const MessageForm = ({ addMessage, displayRandomMessage }) => {
  const [messageType, setMessageType] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const handleMessageTypeChange = (event) => {
    setMessageType(event.target.value);
  };

  const handleCustomMessageChange = (event) => {
    setCustomMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageType && customMessage) {
      addMessage(messageType, customMessage);
      setCustomMessage("");
    }
  };

  const handleDisplayMessage = () => {
    if (!messageType) {
      alert("Veuillez sélectionner un type de message."); // Ou une autre forme de notification
      return;
    }
    displayRandomMessage(messageType);
  };

  return (
    <div className="message-form">
      <div onChange={handleMessageTypeChange} value={messageType}>
        <label>
          <input type="radio" value="affirmations" /> Affirmations
        </label>
        <label>
          <input type="radio" value="mantras" /> Mantras
        </label>
      </div>
      <div>
        <textarea
          value={customMessage}
          onChange={handleCustomMessageChange}
          placeholder="Quelle est ta pensée ?"
        />
        <div className="buttons-part">
          <button onClick={handleDisplayMessage}>Recevoir Message</button>
          <button type="submit" onClick={handleSubmit}>Ajouter Message</button>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
