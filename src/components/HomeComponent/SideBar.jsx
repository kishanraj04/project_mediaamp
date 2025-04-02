import { useState } from "react";
import '../style/sidebat.css'

const SideBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    tags: "",
    releaseYear: "",
    popularity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [name]: value };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <aside className="filters-sidebar">
      <h2>Filters</h2>
      
      <label>
        Category:
        <select name="category" value={filters.category} onChange={handleChange}>
          <option value="">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
        </select>
      </label>

      <label>
        Tags:
        <input
          type="text"
          name="tags"
          value={filters.tags}
          onChange={handleChange}
          placeholder="Enter tags..."
        />
      </label>

      <label>
        Release Year:
        <input
          type="number"
          name="releaseYear"
          value={filters.releaseYear}
          onChange={handleChange}
          placeholder="e.g. 2024"
        />
      </label>

      <label>
        Popularity:
        <select name="popularity" value={filters.popularity} onChange={handleChange}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
    </aside>
  );
};

export default SideBar;