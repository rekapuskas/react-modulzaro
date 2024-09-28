import { useRef, useState } from "react";

export default function Question({ currentQuestion, page }) {
  const { question, options, correctAnswer } = currentQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const handleAnswer = (e) => {
    if (e.target.value == correctAnswer) {
      setPoints(points + 1);
    }
  };
  console.log(points);
  return (
    <div>
      <div>{`Question ${page}/10`}</div>
      <div>{question}</div>
      <div>
        {options.map((option, index) => {
          return (
            <>
            <label htmlFor={index}>{option}</label>
            <input onClick={handleAnswer}
                className="btn-check"
                key={index}
                value={option} type="radio" name="answer" id={index} />
              <br />
            </>
          );
        })}
    
      </div>
    </div>
  );
}
