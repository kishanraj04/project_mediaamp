import { useState } from "react";
import { Bookmark, Search } from "lucide-react";
import "../style/header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        <Search className="search-icon" size={18} />
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