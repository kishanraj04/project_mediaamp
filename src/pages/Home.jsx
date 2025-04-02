import React from "react";
import { useSelector } from "react-redux";
import GameCard from "../components/card/GameCard";
import "../../src/components/style/home.css";
import PaginationComp from "../components/pagination/Pagination";
function Home() {
  const gameData = useSelector((state) => state?.game?.allgames);
  
  return (
    <>
      {
        !gameData?<h1>....loading</h1>:<div className="game-container">
        <div className="main-container-home">
          {gameData && gameData.map((item) => <GameCard game={item} />)}
        </div>

        <div className="pagination">
          <PaginationComp />
        </div>
      </div>
      }
    </>
  );
}

export default Home;
