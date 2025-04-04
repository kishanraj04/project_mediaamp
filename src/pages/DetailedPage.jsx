import React, { useContext, useState } from "react";
import { Star } from "lucide-react";
import { useLocation } from "react-router";
import "../components/style/detailed.css";
import "../components/style/card.css";
import GameCard from "../components/card/GameCard";
import { useSelector } from "react-redux";
import { AppContext } from "../context/AppContext";

const DetailedPage = () => {
  const { isVisible, setIsVisible } = useContext(AppContext);
  const { state } = useLocation();
  console.log("s ",state);
  const gameData = useSelector((state) => state?.game?.allgames);
  const game = state;
  console.log(game?.background_image);
  const [newImage, setImage] = useState(game?.background_image);
  console.log(newImage);
  if (!game) {
    return <p className="text-center text-gray-500">Game not found</p>;
  }
  

  const handleImageChange = (img) => {
    setImage(img);
  };

  return (
    <>
      <div className="detailed-container">
        <div className="image-content-container">
          {/* image */}
          <div className="game-image-container">
            <img
              src={newImage}
              alt={game?.background_image}
              className="game-image"
            />

            <div className="screenshorts">
              {game?.short_screenshots?.map(({ image }, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-xl shadow-md"
                  onClick={() => handleImageChange(image)}
                />
              ))}
            </div>
          </div>

          {/* content */}
          <div className="content-2">
            <h1 className="text-3xl font-bold mb-4">{game?.name}</h1>
            <h3>Rating Count : {game?.ratings_count}</h3>
            <h3>Rating : {game?.rating}</h3>
            <h3>Released : {game?.released}</h3>
            <h3>Review Count : {game?.reviews_count}</h3>
          </div>
        </div>

        <div className="allgames">
        {gameData && gameData.map((item) => <GameCard game={item} />)}

        </div>
      </div>
    </>
  );
};

export default DetailedPage;
