import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface ModesProps {
	timerMode: string;
	setTimerMode: React.Dispatch<React.SetStateAction<string>>
}

const Modes = ({timerMode, setTimerMode}:ModesProps) => {
  
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setTimerMode(newAlignment);
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
        <ToggleButton value="work">Work</ToggleButton>
        <ToggleButton value="short">Short Break</ToggleButton>
        <ToggleButton value="long">Long Break</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Modes;
