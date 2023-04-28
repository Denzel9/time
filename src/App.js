import { useEffect, useState } from "react";
import { getPadTime } from "./helpers/getPadTime";

function App() {
  const [time, setTime] = useState(4380);
  const [isBegining, setIsBegining] = useState(false);

  const hours = getPadTime(Math.floor(time / 60 / 60));
  const minutes = getPadTime(Math.floor(time / 60) % 60);
  const seconds = getPadTime(time % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isBegining && setTime((time) => (time >= 1 ? time - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isBegining]);

  const handleStart = () => setIsBegining(true);

  const handleStop = () => setIsBegining(false);

  const handleReset = () => {
    setTime(4380);
    setIsBegining(false);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
