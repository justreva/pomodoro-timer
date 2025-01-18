import { useEffect, useState } from "react";
import useSound from "use-sound";
import timesUpMelody from "./sound/timesUp.wav"
import Header from "./components/Header";
import Modes from "./components/Modes";
import Progress from "./components/Progress";
import Buttons from "./components/Buttons";

function App() {
  const [timerMode, setTimerMode] = useState("work");
  const workTime: number = 25;
  const shortBreak: number = 3;
  const longBreak: number = 15;
  const [secondsLeft, setSecondsLeft] = useState(workTime * 60);
  const [isActive, setActive] = useState(false);
  const [timesUp] = useSound(timesUpMelody)

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        clearInterval(interval);
        timesUp()
      }
      return () => clearInterval(interval);
    }
  }, [isActive, secondsLeft]);

  const formatedTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  const calculatePercentage = () => {
    if (timerMode === "work") {
      return (secondsLeft / (workTime * 60)) * 100;
    }
    if (timerMode === "short") {
      return (secondsLeft / (shortBreak * 60)) * 100;
    }
    if (timerMode === "long") {
      return (secondsLeft / (longBreak * 60)) * 100;
    }
  };
  return (
    <div className="container mt-10">
      <Header title="Pomodoro" />
      <Modes
        timerMode={timerMode}
        setTimerMode={setTimerMode}
        setSecondLeft={setSecondsLeft}
        workTime={workTime}
        shortBreak={shortBreak}
        longBreak={longBreak}
      />
      <Progress
        timerText={formatedTime(secondsLeft)}
        percentage={calculatePercentage()}
      />
      <Buttons isActive={isActive} setActive={setActive} />
    </div>
  );
}
export default App;
