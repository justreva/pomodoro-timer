import ToggleButton from "@mui/material/ToggleButton";

interface ButtonsProps {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Buttons = ({ isActive, setActive }: ButtonsProps) => {
  return (
    <div className="flex justify-center mt-10">
      <ToggleButton value="check" onChange={() => setActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </ToggleButton>
    </div>
  );
};

export default Buttons;
