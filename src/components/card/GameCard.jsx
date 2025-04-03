import React from "react";
import '../style/card.css'
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <Link to={`/${game?.name}`} state={game}>
      <img className="game-image" src={game?.background_image} alt={game.title} />
      </Link>
      <h2 className="game-title">{game?.name}</h2>
      <p className="game-relesed">Released : {game?.released}</p>
      
      
      <div className="heart-container">
      <div className="content">
      <p className="game-category">Reviews: {game?.reviews_count}</p>
      <p className="game-rating">Rating: {game?.rating}/5</p>
      </div>
      <CiHeart size={'30px'} color="red"/>
      </div>
    </div>
  );
};

export default GameCard;
