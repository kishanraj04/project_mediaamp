import { useContext, useState } from "react";
import "../style/sidebat.css";
import { filterGame } from "../../api/filterApi";
import { useDispatch, useSelector } from "react-redux";
import { setAllGames } from "../../store/gameData";
import { useNavigate } from "react-router-dom";  // Fixed incorrect import
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";

const SideBar = () => {
  const [filters, setFilters] = useState({
    category: "",
    tags: "",
    releaseYear: "",
    popularity: "",
  });

  const { isVisible, setIsVisible } = useContext(AppContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilter = async () => {
    navigate("/");
    const filterData = (await filterGame(filters))?.data?.results;
    dispatch(setAllGames({ data: filterData }));
    if (filterData?.length > 50) {
      dispatch(setAllGames({ data: filterData.slice(0, 50) }));
    }
  };

  return (
    <aside className={`filters-sidebar ${isVisible ? "open" : "closed"}`}>
      <div className="toggle-main">
        <button className="toggle-btn" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
      </div>
      {isVisible && (
        <div className="filter-content">
          <h2>Filters</h2>

          <label className="filter-label">
            Category:
            <select name="category" value={filters.category} onChange={handleChange}>
              <option value="">All</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="indie">Indie</option>
              <option value="puzzle">Puzzle</option>
              <option value="platformer">Platformer</option>
            </select>
          </label>

          <label className="filter-label">
            Tags:
            <input
              type="text"
              name="tags"
              value={filters.tags}
              onChange={handleChange}
              placeholder="Enter tags..."
            />
          </label>

          <label className="filter-label">
            Release Year:
            <input
              type="date"
              name="releaseYear"
              value={filters.releaseYear}
              onChange={handleChange}
              placeholder="e.g. 2024"
            />
          </label>

          <label className="filter-label">
            Rating:
            <select name="popularity" value={filters.popularity} onChange={handleChange}>
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <button className="filter-button" onClick={handleFilter}>
            Filter
          </button>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
