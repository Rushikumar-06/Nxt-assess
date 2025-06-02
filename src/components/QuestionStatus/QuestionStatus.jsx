import React from 'react'
import { useState,useContext } from "react";
import {useNavigate} from 'react-router';
import { currentQuestionContext } from '../../pages/Assessment';
import Timer from '../Timer/Timer';
import './QuestionStatus.css';
import { UserContext } from '../../App';
function QuestionStatus() {
  
  const totalQuestions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const { currentQuestion, setCurrentQuestion,answered,setAnswered } = useContext(currentQuestionContext);
  const { setIsRunning } = useContext(UserContext);
  const navigate = useNavigate();
  function handleQuestionNumberClick(number) {
    setCurrentQuestion(number);
     
  }
  return (
    <div className="assessment-container">
      <div>
        <div className="timer-header">
          <span>Time Left</span>
          <Timer />
        </div>

        <div className="status-container">
          <div className="status ">
            <span className="circle purple">{answered.length}</span>
            <span>Answered Questions</span>
          </div>
          <div className="status ">
            <span className="circle grey">{10 - answered.length}</span>
            <span>Unanswered Questions</span>
          </div>
        </div>

        <div className="questions-section">
          <h3>Questions 10</h3>
          <div className="questions-grid">
            {totalQuestions.map((questionNumber) => (
              <button
                key={questionNumber}
                className={`question-button ${
                  answered.includes(questionNumber) ? "answered" : "unanswered"
                }`}
                onClick={() => handleQuestionNumberClick(questionNumber)}
              >
                {questionNumber + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="submit-button-container">
        
          <button className="submit-button" onClick={() => {navigate("/assessment/success", { replace: true }),
            setIsRunning(false); }}>Submit Assessment</button>
      </div>
    </div>
  );
}

export default QuestionStatus
