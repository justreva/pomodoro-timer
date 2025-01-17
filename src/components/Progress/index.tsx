
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressProps {
	timerText: string,
	percentage: number
}

const Progress = ({timerText, percentage }:ProgressProps) => {

  return (
    <div className="flex items-center mt-10 flex-col">
      <CircularProgressbarWithChildren
        value={percentage}
        text={timerText}
				strokeWidth={7}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: "#9f1239",
          textColor: "#9f1239",
					
        })}
      ></CircularProgressbarWithChildren>
    </div>
  );
};

export default Progress;
