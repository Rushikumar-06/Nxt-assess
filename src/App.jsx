import React ,{useState, createContext,useEffect }from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router"
import { Navigate} from 'react-router';
import Layout from './Layout/Layout';
import AssessmentPage  from './pages/Assessment';
import SubmitionSuccess from './components/SubmitionSuccess/SubmitionSuccess';
import SubmitionFail from './components/SubmitionFail/SubmitionFail';
import './App.css';
export const UserContext = createContext();
localStorage.setItem("isLoggedIn", false);
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
  const [selectedOptionDetails, setSelectedOptionDetails] = useState([]);
   const [isRunning, setIsRunning] = useState(true);
   useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn,selectedOptionDetails,setSelectedOptionDetails ,isRunning,setIsRunning}}>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" replace />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/assessment/success" element={<SubmitionSuccess />} />
          <Route path="/assessment/fail" element={<SubmitionFail />} />
        </Route>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />}/>
        
      </Routes>
    </UserContext.Provider>
    
  )
}

export default App
