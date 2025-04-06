import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/card/GameCard";
import "../../src/components/style/home.css";
import "../../src/components/style/sidebat.css";
import { HiEquals } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import PaginationComp from "../components/pagination/Pagination";
import { setSideBarToggel } from "../store/localVariables";
import { AppContext } from "../context/AppContext";
import LoadingSpinner from "../components/HomeComponent/LoadinSpinner";
import Banner from "../components/HomeComponent/Banner";
function Home() {
  const {isVisible,setIsVisible} = useContext(AppContext)
   const {isLoading,setIsLoading} = useContext(AppContext)
  const gameData = useSelector((state) => state?.game?.allgames);
  const toggle = useSelector((state) => state?.localVariable?.sideToggle);
  
  const dispatch = useDispatch()
  const handleToggele = ()=>{
   dispatch(setSideBarToggel())
  }

  if(isLoading){
    return <LoadingSpinner/>
  }

  return (
    <>
      {!gameData ? (
        <h1>....loading</h1>
      ) : (
        <div className="game-container"  style={{ width: isVisible ? "100%" : "100%" }}>
          <div className="banner">
          <Banner/>
          </div>
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
