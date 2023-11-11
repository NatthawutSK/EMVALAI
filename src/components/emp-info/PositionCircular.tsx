import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type Props = {
	value: number;
	text: string;
	position: string;
	amount: number;
};

const PositionCircular = (props: Props) => {
	return (
		<div className="flex flex-row space-x-5 justify-start">
			<div className="w-10 h-10">
				<CircularProgressbar
					value={props.value}
					text={props.text}
					background
					backgroundPadding={6}
					styles={buildStyles({
						textColor: "red",
						pathColor: "orange",
						backgroundColor: "white",
						textSize: "28px",
					})}
				/>
			</div>
			<h2 className="self-center">
				{props.position} ({props.amount})
			</h2>
		</div>
	);
};

export default PositionCircular;
