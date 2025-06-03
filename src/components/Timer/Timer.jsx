import React, { useState, useEffect ,useContext} from "react";
import "./Timer.css";
import { UserContext } from '../../App';
import { Navigate } from "react-router";
const Timer = () => {
  const initialTime = 600; 
  const [timeLeft, setTimeLeft] = useState(initialTime);
 
    const { setIsRunning,isRunning } = useContext(UserContext);
  useEffect(() => {
    if (!isRunning || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);
  
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  if (timeLeft === 0) {
    return <Navigate to="/assessment/timeup" replace />;
  }
  return (
      <div className="timer-time">{formatTime(timeLeft)}</div>
  );
};

export default Timer;
