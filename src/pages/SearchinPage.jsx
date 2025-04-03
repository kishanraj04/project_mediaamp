import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Fixed import
import GameCard from '../components/card/GameCard';
import '../components/style/SearchingContainer.css'

function SearchinPage() {
    const location = useLocation();
    const searchQuery = location.state?.toLowerCase() || ""; // Ensure it's a string

    const gameData = useSelector((state) => state?.game?.allgames || []);

    const filteredGames = gameData.filter((item) => 
        item?.name?.toLowerCase().includes(searchQuery) 
    );
    

    return (
        <div className="searching-container">
            {filteredGames.length > 0 ? (
                filteredGames.map((filterGame) => (
                    <GameCard key={filterGame.id} game={filterGame} />
                ))
            ) : (
                <p>No games found</p>
            )}
        </div>
    );
}

export default SearchinPage;
