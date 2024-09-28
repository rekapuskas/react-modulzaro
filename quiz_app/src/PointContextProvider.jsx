import { useState } from "react";
import PointContext from "./PointContext";

export default function PointContextProvider({ children }) {
  const [points, setPoints] = useState(0);

  return <PointContext.Provider value={{points, setPoints}}>{children}</PointContext.Provider>;
}
