import React from 'react'
import { useEffect, useState ,createContext} from "react";
import Question from "../components/Question/Question";
import QuestionStatus from "../components/QuestionStatus/QuestionStatus";
import "./Assessment.css"
import Loader from "../components/Loader/Loader";
import ErrorPage from './ErrorPage';
export const currentQuestionContext = createContext();
function Assessment() {
   
  const [loading, setLoading] = useState(true);
  const [fetchingError, setFetchingError] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/assess/questions");
      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      setFetchingError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const question = fetchedData.questions ? fetchedData.questions[currentQuestion] : null;
  return (
    <currentQuestionContext.Provider value={{ currentQuestion, setCurrentQuestion ,answered,setAnswered}}>
        <div className="assessment-content">
          {loading ? (
            <Loader />
          ) : fetchingError ? (
            <ErrorPage />
          ) : (
           <div className="assessment-page">
              <div className='assessment-page-question'> <Question data={question} number={currentQuestion}/></div>
              <div classsName="assessment-page-question-table"><QuestionStatus/></div>
            </div>
          )}
        </div>
    </currentQuestionContext.Provider>
  )
}

export default Assessment
