import React, { useState } from 'react'

import "./Question.css"
function Question({data,number}) {
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="question-container">
     <div>
         <h2 className="question-title">{number+1}.{data?.question_text}</h2>
      <div className="horizontal-line"></div>
      <div className="options-list">
        { data && data.options_type === "DEFAULT" && data?.options.map((option, index) => (
          <button key={index} className={selectedOption &&option.id === selectedOption.id ? "option-item selected-option" : "option-item"} onClick={() => setSelectedOption(option)}>
            {option.text}
          </button>
        ))}
        { data && data.options_type === "IMAGE" && data?.options.map((option, index) => (
            <img src={option.image_url} alt={`Option ${index + 1}`} key={index} className={selectedOption &&option.id === selectedOption.id ? "option-item-image selected-option-image" : "option-item-image"} onClick={() => setSelectedOption(option)} />
        ))}
        { data && data.options_type === "SINGLE_SELECT" && <select onChange={(e) => {setSelectedOption(e.target.value)}} className="dropdown-menu">
            {  data &&  data?.options.map((option, index) => (
              <option key={index}  value={option} className= {selectedOption &&option.id === selectedOption.id ? "dropdown-menu-item selected-dropdown-item" : 'dropdown-menu-item'}>
                {option.text}
              </option>
            ))}
        </select>}
      </div>
     </div>
     <div className = "question-footer">
        <div></div>
        { data && data.options_type === "SINGLE_SELECT" ? <div class="alert">
            <span class="alert-icon">⚠️</span>
            <span class="message">First option is selected by default</span>
        </div> : <div></div>}
        <button>Next Question</button>
     </div>
    </div>
  )
}

export default Question
