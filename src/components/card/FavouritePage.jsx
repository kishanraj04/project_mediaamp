import { useState } from "react";
import "../style/favourite.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourite } from "../../store/favoutrite";

export default function FavouriteCard() {
  const gameData = useSelector((state) => state?.favourite?.favouriteGame);
  const dispatch = useDispatch()
  return (
    <>
      <div className="all-favourite">
      {gameData?.length > 0 ?
         gameData?.map((game) => (
            <div className="card">
              <div className="left">
                <img
                  src={game?.background_image}
                  alt={game?.name}
                  className="game-image"
                />
              </div>

              <div className="right">
                <h2>{game?.name}</h2>
                <p>
                  <strong>Released:</strong> {game?.released}
                </p>
                <p>
                  <strong>Reviews:</strong> {game?.reviews_count}
                </p>
                <p>
                  <strong>Rating:</strong>  {game?.rating}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromFavourite({id:game?.id}))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        : <img src="../../../public/notfound.jpg" alt="" className="game-not-found"/>}
      </div>
    </>
  );
}
