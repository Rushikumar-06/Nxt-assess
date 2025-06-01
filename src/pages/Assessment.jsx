import React from 'react'
import { useEffect, useState } from "react";
import Question from "../components/Question/Question";
import "./Assessment.css"
function Assessment() {
   
  const [loading, setLoading] = useState(true);
  const [fetchingError, setFetchingError] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/assess/questions");
      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      setFetchingError(true);
        console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const question = fetchedData.questions ? fetchedData.questions[2] : null;
  return (
    <div className="assessment-page">
     <div className='assessment-page-question'> <Question data={question} number={1}/></div>

    </div>
  )
}

export default Assessment
