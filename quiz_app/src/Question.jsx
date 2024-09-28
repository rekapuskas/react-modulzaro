import { useRef, useState } from "react";
import { useContext } from "react";
import PointContext from "./PointContext";

export default function Question({ currentQuestion, page }) {
  const { question, options, correctAnswer } = currentQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { points, setPoints } = useContext(PointContext);
  const handleAnswer = (e) => {
    e.preventDefault();
    console.log(selectedAnswer);
    if (selectedAnswer == correctAnswer) {
      setPoints(points + 1);
    }
  };

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };
  return (
    <div>
      <div>{`Question ${page}/10`}</div>
      <div>{question}</div>
      <div>
        <form onSubmit={handleAnswer} action="">
          {options.map((option, index) => {
            return (
              <div key={index}>
                <label htmlFor={index}>{option}</label>
                <input
                  onChange={handleChange}
                  className="btn-check"
                  key={index}
                  value={option}
                  type="radio"
                  name="answer"
                  id={index}
                />
                <br />
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
}
