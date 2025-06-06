import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from '../../App'; 
 function  Navbar(){
    const { setIsLoggedIn } = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://res.cloudinary.com/dnefyrorp/image/upload/v1748944748/Group_8004_amvqw3.png" alt="NXT Access Logo" />
      </div>
      <button className="logout-btn" onClick={()=>setIsLoggedIn(false)}>Logout</button>
    </nav>
  );
};

export default Navbar
