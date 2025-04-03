import { useState } from "react";
import { Bookmark,  Search } from "lucide-react";
import { IoMdBookmark } from "react-icons/io";
import "../style/header.css";
import { apiCalling } from "../../api/apiCalling";
import { useDispatch, useSelector } from "react-redux";
import { setAllGames } from "../../store/gameData";
import { useNavigate } from "react-router";
import { Link } from "react-router";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  


  return (
    <header className="header">
      <div className="logo">GameZone</div>

      <div className="search-container">
      
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => {
            navigate('/searching-page',{state:searchTerm})
            setSearchTerm(e.target.value)
          }}
          className="search-input"
        />
        <Search className="search-icon" size={18}/>
      </div>

      <div className="library-section">
        <Link to="/favourite" className="library-btn">
          <IoMdBookmark size={18}/>
        </Link>
      </div>
    </header>
  );
};

export default Header;