import { useContext } from "react";
import PointContext from "./PointContext";

export default function Results() {
    const {points} = useContext(PointContext)
  return (
    <div>
      <div>Quiz comlpleted</div>
    <div>{`Your final score: ${points}`}</div>
    </div>
  );
}
