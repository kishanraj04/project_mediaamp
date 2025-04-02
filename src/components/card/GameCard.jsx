import React from "react";
import "../styles/GameCard.css"; // Import the CSS file

const GameCard = ({ game }) => {
  return (
    <>
    hii
    </>
    // <div className="game-card">
    //   <img className="game-image" src={game.image} alt={game.title} />
    //   <h2 className="game-title">{game.title}</h2>
    //   <p className="game-description">{game.description}</p>
      
    //   <div className="game-tags">
    //     {game.tags.map((tag, index) => (
    //       <span key={index} className="tag">{tag}</span>
    //     ))}
    //   </div>
      
    //   <p className="game-category">Category: {game.category}</p>
    //   <p className="game-rating">Rating: {game.rating}/5</p>
    // </div>
  );
};

export default GameCard;
