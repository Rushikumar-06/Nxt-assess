
import "./Instructions.css";
import {Link} from "react-router";
function Instructions() {
  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <h2>Instructions</h2>
        <ol>
          <li><strong>Total Questions:</strong> 10</li>
          <li><strong>Types of Questions:</strong> MCQs</li>
          <li><strong>Duration:</strong> 10 Mins</li>
          <li><strong>Marking Scheme:</strong> Every Correct response, get 1 mark</li>
          <li>All the progress will be lost, if you reload during the assessment</li>
        </ol>
        <Link to={"/assessment"}><button className="start-button">Start Assessment</button></Link>
      </div>
      <div className="instructions-image">
        <img src="/assessment.png" alt="Assessment Instructions" />
      </div>
    </div>
  );
};

export default Instructions;
