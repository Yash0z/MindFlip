const Bar = ({ clr, pos, w, h, axis }) => {
	const axisVariants = {
		x: "border-x",
		y: "border-y",
	};

	const posVariants = {
		top: "top-0",
		bottom: "bottom-0",
		left: "left-0",
		right: "right-0",
	};

	const widthVariants = {
		full: "w-full",
		3: "w-3",
	};

	const heightVariants = {
		full: "h-full",
		3: "h-3",
	};

	const colorVariants = {
		purple: "bg-purple",
		yellow: "bg-yellow",
		red: "bg-red",
		green: "bg-green",
		blue: "bg-blue",
		orange: "bg-orange",
	};

	return (
		<div
			className={`absolute border-black ${axisVariants[axis]} ${posVariants[pos]} ${widthVariants[w]} ${heightVariants[h]} ${colorVariants[clr]}`}
		></div>
	);
};

export default Bar;
