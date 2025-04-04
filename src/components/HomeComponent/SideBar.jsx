import { useState } from "react";
import '../style/sidebat.css'
import { filterGame } from "../../api/filterApi";
import { useDispatch, useSelector } from "react-redux";
import { setAllGames } from "../../store/gameData";
import { useNavigate } from "react-router";

const SideBar = () => {
  const [filters, setFilters] = useState({
    category: "",
    tags: "",
    releaseYear: "",
    popularity: "",
  });

  const toggle = useSelector((state) => state?.localVariable?.sideToggle);

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const dispatch = useDispatch()
  const handleFilter = async()=>{
    navigate('/')
    const filterData =(await filterGame(filters))?.data?.results
    dispatch(setAllGames({data:filterData}))
    if(filterData?.length>50){
      const newGameData = filterData.slice(0,50)
      dispatch(setAllGames({data:newGameData}))
    }
  }

  return (
    <aside className="filters-sidebar">
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

      <button className="filter-button" onClick={handleFilter}>Filter</button>
    </aside>
  );
};

export default SideBar;
