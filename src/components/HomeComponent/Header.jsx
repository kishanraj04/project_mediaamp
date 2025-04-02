import { useState } from "react";
import { Bookmark, Search } from "lucide-react";
import "../style/header.css";
import { apiCalling } from "../../api/apiCalling";
import { useDispatch } from "react-redux";
import { setAllGames } from "../../store/gameData";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const handleSearch = async(e)=>{
    const option = {method:"GET",url:`https://api.rawg.io/api/games?key=6d633194af394581991e28eb88ce8c1d&search=${searchTerm}`}
    const resp = await apiCalling(option)
    dispatch(setAllGames({data:resp?.data?.results}))
  }

  return (
    <header className="header">
      <div className="logo">GameZone</div>

      <div className="search-container">
      
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <Search className="search-icon" size={18} onClick={handleSearch}/>
      </div>

      <div className="library-section">
        <button className="library-btn">
          <Bookmark size={18} />
          <span>Library</span>
        </button>
      </div>
    </header>
  );
};

export default Header;