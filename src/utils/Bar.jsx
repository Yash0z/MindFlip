const Bar = ({ clr, pos, w, h, axis }) => {
	return (
		<>
			<div
				className={`border-${axis} border-black absolute h-${h} w-${w} ${pos}-0 bg-${clr} `}
			></div>
		</>
	);
};
export default Bar;
