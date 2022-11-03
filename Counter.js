import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);

  let timeout;

  useEffect(() => {
    if (start) handleStartCounter();
    return () => clearTimeout(timeout);
  }, [counter]);

  const handleStartCounter = (e) => {
    timeout = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    if (start === false) setStart(true);
  };

  const handlePauseCounter = () => {
    clearTimeout(timeout);
  };

  const resetCounter = () => {
    setStart(false);
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={start ? handlePauseCounter : handleStartCounter}>
        {start ? `Pause` : `Start`}
      </button>
      &nbsp;&nbsp;
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
