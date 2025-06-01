import "./Navbar.css";
import { useContext } from "react";
import { UserLoginContext } from '../../App'; 
 function  Navbar(){
    const { setIsLoggedIn } = useContext(UserLoginContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="null" alt="NXT Access Logo" />
      </div>
      <button className="logout-btn" onClick={()=>setIsLoggedIn(false)}>Logout</button>
    </nav>
  );
};

export default Navbar
