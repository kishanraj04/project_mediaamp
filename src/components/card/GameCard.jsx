import React from "react";
import '../style/card.css'

const GameCard = ({ game }) => {
    console.log(game);
  return (
    <div className="game-card">
      <img className="game-image" src={game?.background_image} alt={game.title} />
      <h2 className="game-title">{game?.name}</h2>
      <p className="game-relesed">Released : {game?.released}</p>
      
      
      <p className="game-category">Reviews: {game?.reviews_count}</p>
      <p className="game-rating">Rating: {game?.rating}/5</p>
    </div>
  );
};

export default GameCard;
