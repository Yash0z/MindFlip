import { IoReorderThreeOutline } from "react-icons/io5";
import HamBurger from "../utils/HamBurger";
import { useState } from "react";

const Sidebar = () => {
	const [toggle, setToggle] = useState(false);
	const handleClick = () => {
		setToggle(!toggle);
		// console.log(toggle);
	};
	return (
		<>
			<HamBurger click={handleClick} />
			<div className='fixed inset-0'>
				<div
					className={`${
						toggle === true ? "block" : " hidden"
					} absolute right-0 bg-white h-screen w-[40%]`}
				>
					das
				</div>
			</div>
		</>
	);
};
export default Sidebar;
