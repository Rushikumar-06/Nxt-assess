
import './Login.css';
import React, { useState ,useContext} from 'react';
import { UserLoginContext } from '../../App'; 
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
    const { setIsLoggedIn } = useContext(UserLoginContext);
  const  loginSubmit= async (e)=> {
    e.preventDefault();
    const { username, password } = userDetails;
    if (username !== 'rahul' || password !== 'rahul@2021') {
      setError(true);
      return;
    }
    else  {
        setIsLoggedIn(true);
        setError(false);
    }
    // try {
    //   const loginResponse = await fetch('https://apis.ccbp.in/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   });

    //   if (loginResponse.ok) {
    //     const allowedUsers = await loginResponse.json();
    //     console.log('User data:', allowedUsers);
    //   } 
      
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  }
  return (
    <div className="login-container">
      <form className="login-card" onSubmit={loginSubmit}>
        <img
          
          alt="NXT Assess Logo"
          className="logo"
        />
        <h2 className="title"><b>NXT</b> Assess</h2>

        <div className="input-group">
          <label>USERNAME</label>
          <input type="text" placeholder="rahul"  className='username' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}/>
        </div>

        <div className="input-group">
          <label>PASSWORD</label>
          <input type={showPassword ? 'text' : 'password'} placeholder="**********"  className='password' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}/>
          <div className="checkbox">
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
        </div>

        <button className="login-button" type='submit'>Login</button>
        <p className='login-error-message'> {error? "Please enter a valid Username & Password" : null}</p>
      </form>
    </div>
  );
};

export default Login;
