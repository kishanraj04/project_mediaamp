import React from 'react'
import { useSelector } from 'react-redux'
import GameCard from '../components/card/GameCard';
import '../../src/components/style/home.css'
function Home() {
    const gameData = useSelector((state)=>state?.game?.allgames)
    console.log(gameData);
  return (
    <div className='main-container-home'>
        {
            gameData && gameData.map((item)=><GameCard game={item}/>)
        }
    </div>
  )
}

export default Home