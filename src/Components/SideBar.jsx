import HamBurger from "../utils/HamBurger";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	toggleSidebar,
	sidebarState,
	closeSidebar,
} from "../Store/SidebarSlice/sidebarSlice.js";
import ToggleAnimation from "../utils/Animations/ToggleAnimation.jsx";

const Sidebar = () => {
	const dispatch = useDispatch();

	const sidebarRef = useRef(null);
	const handleClick = () => {
		dispatch(toggleSidebar());
	};

	//Close sidebar when xl(1280px) is hit   #bug
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				dispatch(closeSidebar());
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [dispatch]);

	return (
		<>
			<HamBurger click={handleClick} />
			<ToggleAnimation refer={sidebarRef} />
			<div className='fixed inset-0'>
				<div
					ref={sidebarRef}
					className={`xl:${dispatch(
						closeSidebar()
					)} absolute flex right-0 bg-purple text-white h-screen w-80`}
				></div>
			</div>
		</>
	);
};
export default Sidebar;
