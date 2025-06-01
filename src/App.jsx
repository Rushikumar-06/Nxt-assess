import React ,{useState, createContext,useEffect }from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router"
import { Navigate} from 'react-router';
import Layout from './Layout/Layout';
import AssessmentPage  from './pages/Assessment';
import './App.css';
export const UserLoginContext = createContext();
localStorage.setItem("isLoggedIn", false);
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
   useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <UserLoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" replace />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
        </Route>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />}/>
      </Routes>
    </UserLoginContext.Provider>
    
  )
}

export default App
