import { useState } from "react";
import { useContext } from "react";
import PointContext from "./PointContext";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Question({ currentQuestion, page }) {
  const { question, options, correctAnswer } = currentQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { points, setPoints } = useContext(PointContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleAnswer = (e) => {
    e.preventDefault();

    if (selectedAnswer === null) {
      alert("Choose an answer!");
    } else {
      searchParams.set("_page", page + 1);
      setSearchParams(searchParams);
      console.log(selectedAnswer);
      if (selectedAnswer == correctAnswer) {
        setPoints(points + 1);
      }
      setSelectedAnswer(null);
      if (page >= 10) {
        navigate("/results");
        return;
      }
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
                  checked={selectedAnswer === option}
                />
                <br />
              </div>
            );
          })}

          <input
            type="submit"
            value={page == 10 ? "Result" : "Next question"}
          />
        </form>
      </div>
    </div>
  );
}
