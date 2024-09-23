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
	//Links Array

	const links = ["first", "second", "third", "fourth", "fifth"];

	const dispatch = useDispatch();
	const textRef = useRef([]);
	const sidebarRef = useRef();
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
			<ToggleAnimation sidebarRef={sidebarRef} textRef={textRef} />
			<div className=' fixed inset-0'>
				<div
					ref={sidebarRef}
					className='absolute right-0  flex  flex-col   bg-purple  text-white h-screen w-80'
				>
					<div className=' absolute w-full top-52 flex flex-col p-5 gap-8 cursor-pointer '>
						{links.map((link, index) => (
							<h1
								key={index}
								ref={(el) => (textRef.current[index] = el)}
								className='text-5xl text-black font-Satoshi_bk '
							>
								{link}
							</h1>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Sidebar;
