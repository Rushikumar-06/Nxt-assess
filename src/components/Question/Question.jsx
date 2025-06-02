import React, { useState, useContext } from "react";
import { currentQuestionContext } from "../../pages/Assessment";
import "./Question.css";
import { UserContext } from '../../App';

function Question({ data, number }) {
  const [selectedOption, setSelectedOption] = useState(false);
  const { currentQuestion,setCurrentQuestion, answered, setAnswered} = useContext(
    currentQuestionContext
  );
  const {selectedOptionDetails ,setSelectedOptionDetails} = useContext(UserContext);
  if (selectedOption) {
    if (!answered.includes(currentQuestion)) {
      setAnswered([...answered, currentQuestion]);
    }
    setSelectedOptionDetails((prev) => {
      const existingOption = prev.find(
        (elm) => elm.questionNumber === selectedOption.questionNumber
      );
      if (existingOption) {
        return prev.map((elm) =>
          elm.questionNumber === selectedOption.questionNumber
            ? selectedOption
            : elm
        );
      } else {
        return [...prev, selectedOption];
      }
    });
    setSelectedOption(false);
  }
  function dropDownHandle() {
    const match = selectedOptionDetails.find(
      (elm, index) => elm.id === data?.options[index]?.id
    );

    const result = match ? match.text : data?.options[0]?.text;
    return result;
  }

  return (
    <div className="question-container">
      <div>
        <h2 className="question-title">
          {number + 1}.{data?.question_text}
        </h2>
        <div className="horizontal-line"></div>
        <div className="options-list">
          {data &&
            data.options_type === "DEFAULT" &&
            data?.options.map(
              (option, index) => (
                (option.questionNumber = number),
                (
                  <button
                    key={index}
                    className={
                      selectedOptionDetails &&
                      selectedOptionDetails.some((elm) => elm.id === option.id)
                        ? "option-item selected-option"
                        : "option-item"
                    }
                    onClick={() => setSelectedOption(option)}
                  >
                    {option.text}
                  </button>
                )
              )
            )}
          {data &&
            data.options_type === "IMAGE" &&
            data?.options.map(
              (option, index) => (
                (option.questionNumber = number),
                (
                  <img
                    src={option.image_url}
                    alt={`Option ${index + 1}`}
                    key={index}
                    className={
                      selectedOptionDetails &&
                      selectedOptionDetails.some((elm) => elm.id === option.id)
                        ? "option-item-image selected-option-image"
                        : "option-item-image"
                    }
                    onClick={() => setSelectedOption(option)}
                  />
                )
              )
            )}
          {data && data.options_type === "SINGLE_SELECT" && (
            <select
              onChange={(e) => {
                const selected = data.options.find(
                  (opt) => opt.text === e.target.value
                );
                selected.questionNumber = number;
                setSelectedOption(selected);
              }}
              value={(() => {
                const match = selectedOptionDetails.find(
                  (elm) => elm.questionNumber === number
                );
                return match ? match.text : "";
              })()}
              className="dropdown-menu"
            >
              <option value="" disabled>
                Select an option
              </option>
              {data.options.map((option, index) => (
                <option key={index} value={option.text}>
                  {option.text}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="question-footer">
        <div></div>
        { number !==9 ? <button onClick={() => setCurrentQuestion(number + 1)} className="">Next Question</button> : null}
      </div>
    </div>
  );
}

export default Question;
