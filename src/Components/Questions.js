import React, { useState, useEffect } from "react";
import QuestionList from "../data/questionsList";

const Questions = () => {
  const [question, setQuestion] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [index, setIndex] = useState(1);
  const [isPrevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [isNextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    setSelectedOption("");
    setPrevBtnDisabled(index <= 1);
    setNextBtnDisabled(index === QuestionList.length);
    const currentQuestion = QuestionList.filter(
      question => question.id === index
    );
    setQuestion(currentQuestion[0]);
  }, [index]);

  const onPrevBtnClick = () => {
    setIndex(index => index - 1);
  };

  const onNextBtnClick = () => {
    setIndex(index => index + 1);
  };

  const onSubmitAnswer = () => {
    if (!selectedOption) {
      alert("Please select a Option!");
    } else {
      showAnswer();
    }
  };

  const showAnswer = () => {
    alert("The correct Answer is " + question.answer);
  };

  return (
    <div>
      <form>
        <div>
          <h2>
            {question.id}. {question.question}
          </h2>
        </div>
        <div className="options">
          {question.options &&
            question.options.map(opt => (
              <div key={opt}>
                <label>
                  <input
                    type="radio"
                    value={opt}
                    checked={selectedOption === opt}
                    onChange={e => setSelectedOption(e.target.value)}
                  />
                  {opt}
                </label>
              </div>
            ))}
        </div>
        <div className="btnGroup">
          <span>
            <button
              type="button"
              onClick={onPrevBtnClick}
              disabled={isPrevBtnDisabled}
            >
              Previous
            </button>
          </span>
          <span>
            <button type="button" onClick={onSubmitAnswer}>
              Submit Answer
            </button>
          </span>
          <span>
            <button
              type="button"
              onClick={onNextBtnClick}
              disabled={isNextBtnDisabled}
            >
              Next
            </button>
          </span>
          <span>
            <button className="showAnsBtn" type="button" onClick={showAnswer}>
              Show Answer
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Questions;
