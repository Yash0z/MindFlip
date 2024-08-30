import { IoReorderThreeOutline } from "react-icons/io5";

const HamBurger = ({ click }) => {
	return (
		<>
			<button
				onClick={click}
				className=' xl:hidden relative flex items-center border-2 border-black font-Euclid_re text-lg px-3 bottom-2 rounded-full gap-2 m-5 z-10'
			>
				<span>menu</span>
				<IoReorderThreeOutline size={35} />
			</button>
		</>
	);
};
export default HamBurger;
