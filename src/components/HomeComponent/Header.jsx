import { useState } from "react";
import { Bookmark, Search } from "lucide-react";
import '../style/header.css'
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      <div className="text-2xl font-bold">GameZone</div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 text-black rounded-md focus:outline-none"
        />
        <Search className="absolute left-3 top-2.5 text-gray-600" size={18} />
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
          <Bookmark size={18} />
          <span>Library</span>
        </button>
      </div>
    </header>
  );
};

export default Header;