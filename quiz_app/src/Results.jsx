import { useContext, useState } from "react";
import PointContext from "./PointContext";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  const { points } = useContext(PointContext);
 

  const handleRestart = () => {
    navigate("/");
  };

  let personalMessage;
  let style; 

  if (points < 4) {
    personalMessage = "You can do better";
    style = 'danger';
  } else if (points >= 4 || points < 8) {
    personalMessage = "Not bad";
    style = 'warning'
  } else {
    personalMessage = "Congratulations";
    style = 'success'
  }

  return (
    <div className="d-flex flex-column card align-items-center">
      <div className="card-header text-center w-100">Quiz completed</div>
      <div className="card-body">
        <button className={`rounded-6 btn btn-${style}`}>{personalMessage}</button>
        <div className="card-title text-center">{`Your final score: ${points * 10}%`}</div>
      </div>

      <button className={`btn btn-outline-${style}`} onClick={handleRestart}>Restart quiz</button>
    </div>
  );
}
