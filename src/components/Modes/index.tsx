import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface ModesProps {
	timerMode: string;
	setTimerMode: React.Dispatch<React.SetStateAction<string>>;
  setSecondLeft:React.Dispatch<React.SetStateAction<number>>;
  workTime:number;
  shortBreak: number;
  longBreak: number;
}

const Modes = ({timerMode, setTimerMode, setSecondLeft,workTime ,shortBreak, longBreak}:ModesProps) => {


  const handleChange = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const input = event.target as HTMLInputElement;
    setTimerMode(input.id);
    setSecondLeft(Number(input.value) * 60);
  };
  return (
    <div className="flex justify-center mt-5">
      <ToggleButtonGroup
        color="error"
        value={timerMode}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton id="work" value={workTime}>Work</ToggleButton>
        <ToggleButton id="short" value={shortBreak}>Short Break</ToggleButton>
        <ToggleButton id="long" value={longBreak}>Long Break</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Modes;
