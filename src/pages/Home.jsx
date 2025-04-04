import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/card/GameCard";
import "../../src/components/style/home.css";
import "../../src/components/style/sidebat.css";
import { HiEquals } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

import PaginationComp from "../components/pagination/Pagination";
import { setSideBarToggel } from "../store/localVariables";
function Home() {
  const gameData = useSelector((state) => state?.game?.allgames);
  const toggle = useSelector((state) => state?.localVariable?.sideToggle);
  
  const dispatch = useDispatch()
  const handleToggele = ()=>{
   dispatch(setSideBarToggel())
  }

  return (
    <>
      {!gameData ? (
        <h1>....loading</h1>
      ) : (
        <div className="game-container">
          {toggle ? <HiEquals className="equal" size={'40px'} onClick={handleToggele}/> :
          <RxCross1  className="equal" size={'40px'} onClick={handleToggele}/>}
          <div className="main-container-home">
            {gameData && gameData.map((item) => <GameCard game={item} />)}
          </div>

          <div className="pagination">
            <PaginationComp />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
