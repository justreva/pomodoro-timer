import { useEffect, useState } from "react";

import Header from "./components/Header";
import Modes from "./components/Modes";
import Progress from "./components/Progress";
import Buttons from "./components/Buttons";

function App() {
  const [timerMode, setTimerMode] = useState("work");
  const [workTime, setWorkTime] = useState(25);
  const [short, setShort] = useState(3);
  const [long, setLong] = useState(15);
  const [secondsLeft, setSecondsLeft] = useState(workTime * 60);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const formatedTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  const calculatePercentage = () => {
    return ((secondsLeft / (workTime * 60)) * 100)
  }
  return (
    <div className="container mt-10">
      <Header title="Pomodoro" />
      <Modes timerMode={timerMode} setTimerMode={setTimerMode} />
      <Progress
        timerText={formatedTime(secondsLeft)}
        percentage={calculatePercentage()}
      />
      <Buttons isActive={isActive} setActive={setActive}/>
    </div>
  );
}

export default App;
