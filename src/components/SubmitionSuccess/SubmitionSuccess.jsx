// AssessmentResult.jsx
import './SubmitionSuccess.css';
import {useState,useContext} from 'react';
import {useNavigate} from 'react-router'

import { UserContext } from '../../App';
function SubmitionSuccess() {
  const { selectedOptionDetails } = useContext(UserContext);
  const navigate = useNavigate();
  function calculateScore(scoreDetails) {
    var score = 0;
    scoreDetails.forEach((current) => {
      if (current.is_correct === 'true') {
        score += 1;
      }
    })
    return score;
  }
  const handleReattempt = () => {
    navigate('/', { replace: true });
    window.location.reload();
  };
  return (
    <div className="Submition-result-wrapper">
      <div className="Submition-result-card">
        <img
          src="https://res.cloudinary.com/dnefyrorp/image/upload/v1748923650/Asset_2_1_ven0hn.png"
          alt="Assessment Complete"
          className="Submition-result-image"
        />
        <h3 className="congrats-text">
          Congrats! You completed the assessment.
        </h3>
        <p className="Submition-score-text">
          Your Score:
          <span className="Submition-score">
            {calculateScore(selectedOptionDetails)}
          </span>
        </p>
        <button
          className="Submition-reattempt-button"
          onClick={handleReattempt}
        >
          Reattempt
        </button>
      </div>
    </div>
  );
}

export default SubmitionSuccess;
