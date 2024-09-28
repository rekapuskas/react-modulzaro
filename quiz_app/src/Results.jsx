import { useContext } from "react";
import PointContext from "./PointContext";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  const { points } = useContext(PointContext);

  const handleRestart = () => {
    navigate("/");
  };

 let personalMessage;
    if (points < 4) {
      personalMessage =  "You can do better";
    } else if (points >= 4 || points < 8) {
      personalMessage =  "Not bad";
    } else {
      personalMessage = "Congratulations";
    }
  
  return (
    <div>
      <div>Quiz comlpleted</div>
      <div>{personalMessage}</div>
      <div>{`Your final score: ${points * 10}%`}</div>
      <button onClick={handleRestart}>Restart quiz</button>
    </div>
  );
}
