import { IoReorderThreeOutline } from "react-icons/io5";
import HamBurger from "../utils/HamBurger";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	toggleSidebar,
	sidebarState,
} from "../Store/SidebarSlice/sidebarSlice";

const Sidebar = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(sidebarState);

	const handleClick = () => {
		dispatch(toggleSidebar());
		// console.log(toggle);
	};

	return (
		<>
			<HamBurger click={handleClick} />
			<div className='fixed inset-0'>
				<div
					className={`${
						isOpen ? "block" : " hidden"
					} absolute right-0 bg-white h-screen w-[40%]`}
				>
					das
				</div>
			</div>
		</>
	);
};
export default Sidebar;
