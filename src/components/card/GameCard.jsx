import React, { useContext } from "react";
import "../style/card.css";
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../store/favoutrite";
import { isFavourite } from "../../helper/checkFavouriteStatus";
import { IoIosHeart } from "react-icons/io";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const GameCard = ({ game }) => {
  const {authToken} = useContext(AppContext)
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state?.favourite?.favouriteGame);
  const handleAddFavourite = async () => {
    
    if(!authToken)
    {
      toast.error("please login")
      return
    }
    
    dispatch(addToFavourite({ favouriteGame: game }));
  };

  const hendleRemoveToFavourite = () => {
    dispatch(removeFromFavourite({ id: game?.id }));
  };

  return (
    <div className="game-card">
      <Link to={`/${game?.name}`} state={game}>
        <img
          className="game-image"
          src={game?.background_image}
          alt={game.title}
        />
      </Link>
      <h2 className="game-title">{game?.name}</h2>
      <p className="game-relesed">Released : {game?.released}</p>

      <div className="heart-container">
        <div className="content">
          <p className="game-category">Reviews: {game?.reviews_count}</p>
          <p className="game-rating">Rating: {game?.rating}/5</p>
        </div>

        {isFavourite(game, gameData) ? (
          <IoIosHeart
            size={"30px"}
            color="red"
            onClick={hendleRemoveToFavourite}
          />
        ) : (
          <CiHeart
            size={"30px"}
            color="red"
            onClick={(game) => handleAddFavourite(game)}
          />
        )}
      </div>
    </div>
  );
};

export default GameCard;
