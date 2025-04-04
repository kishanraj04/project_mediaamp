import { useContext, useState } from "react";
import { Bookmark, Search } from "lucide-react";
import { IoMdBookmark } from "react-icons/io";
import "../style/header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser, UserButton, SignInButton } from "@clerk/clerk-react"; // Clerk Auth Imports
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user } = useUser();
  const {authToken} = useContext(AppContext)

  const handleLibaray = ()=>{
    if(!authToken)
    {
      toast.error("please login")
      return
    }
    navigate('/favourite')
  }
  
  return (
    <header className="header">
      <div className="logo" onClick={()=> navigate('/')}>GameZone</div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            navigate("/searching-page", { state: e.target.value });
          }}
          className="search-input"
        />
        <Search className="search-icon" color="white" size={"32px"} />
      </div>

      <div className="library-section">
      <IoMdBookmark size={"30px"} color="white" onClick={handleLibaray}/>

        {user ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button className="login-btn">Create Account</button>
          </SignInButton>
        )}
      </div>
    </header>
  );
};

export default Header;
