import React from "react";
import "../assets/App.css"

const FavoritesDisplay = ({ favorites, toggleFavoritesDisplay }) => {
  return (
    <div className="favorites-display">
      <div>
        <h2>Favoris</h2>
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <p key={index}>{favorite}</p>
          ))
        ) : (
          <p>Aucun favori enregistré</p>
        )}
        <button onClick={toggleFavoritesDisplay}>Retour</button>
      </div>
    </div>
  );
};

export default FavoritesDisplay;
