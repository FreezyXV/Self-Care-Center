import React, { useState } from "react";
import MessageForm from "./components/MessageForm";
import MessageDisplay from "./components/MessageDisplay";
import FavoritesDisplay from "./components/FavoriteDisplay";
import "./assets/App.css"

function App() {
  const [messages, setMessages] = useState({
    mantras: [
      {
        id: 1,
        String:
          "Je ne pense pas à toute la misère, je pense à la beauté qui reste.",
      },
      { id: 2, String: "Fais de ta vie un rêve et d’un rêve une réalité." },
      {
        id: 3,
        String:
          "Le plaisir se ramasse, la joie se cueille, et le bonheur se cultive.",
      },
      {
        id: 4,
        String:
          "Le plus difficile, ce n’est pas de sortir de Polytechnique, c’est de sortir de l’ordinaire.",
      },
      {
        id: 5,
        String:
          "Je ne bois du champagne qu’à deux occasions : quand je suis amoureuse, et quand je ne le suis pas.",
      },
      { id: 6, String: "Prenez mes idées, j’en aurais d’autres." },
      { id: 7, String: "Il est grand temps de rallumer les étoiles." },
      {
        id: 8,
        String:
          "L’art de vivre consiste en un subtil mélange entre lâcher-prise et tenir bon.",
      },
      {
        id: 9,
        String:
          "Le bonheur est une petite chose que l’on grignote, assis par terre, au soleil.",
      },
      {
        id: 10,
        String:
          "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.",
      },
    ],
    affirmations: [
      {
        id: 1,
        String: "Je suis formidable",
      },
      { id: 2, String: "Je suis motivé" },
      {
        id: 3,
        String: "Je suis toujours positif",
      },
      {
        id: 4,
        String: "Je vis dans l’instant présent",
      },
      {
        id: 5,
        String: "Je suis maître de ma vie",
      },
      { id: 6, String: "Je suis intelligent" },
      { id: 7, String: "J’ai des idées géniales" },
      {
        id: 8,
        String: "Je prends les bonnes décisions",
      },
      {
        id: 9,
        String: "Je suis bien dans mon corps et dans ma tête",
      },
      {
        id: 10,
        String: "Je suis courageux",
      },
    ],
  });
  const [currentMessage, setCurrentMessage] = useState("");
  const [favorites, setFavorites] = useState([]);

  const addMessage = (messageType, messageText) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [messageType]: [
        ...prevMessages[messageType],
        { id: Date.now(), String: messageText },
      ],
    }));
  };

  const displayRandomMessage = (messageType) => {
    const randomIndex = Math.floor(
      Math.random() * messages[messageType].length
    );
    setCurrentMessage(messages[messageType][randomIndex].String);
  };

  const addToFavorites = () => {
    if (!favorites.includes(currentMessage)) {
      setFavorites((prevFavorites) => [...prevFavorites, currentMessage]);
    }
  };

  const clearMessage = () => {
    setCurrentMessage("");
    // Réafficher l'icône de méditation ici si nécessaire
  };

  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavoritesDisplay = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="app">
      <div className="vstack" >
        <h1>Self Care Center</h1>
        <MessageForm
          addMessage={addMessage}
          displayRandomMessage={displayRandomMessage}
        />

        {showFavorites ? (
          <FavoritesDisplay
            favorites={favorites}
            toggleFavoritesDisplay={toggleFavoritesDisplay}
          />
        ) : (
          <>
            <MessageDisplay
              message={currentMessage}
              addToFavorites={addToFavorites}
            />
            <div className="buttons-part">
            <button onClick={clearMessage}>Effacer le message</button>
            <button onClick={toggleFavoritesDisplay}>
              Afficher les favoris
            </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
