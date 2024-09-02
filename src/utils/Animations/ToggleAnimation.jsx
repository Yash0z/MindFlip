import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { sidebarState } from "../../Store/SidebarSlice/sidebarSlice";

const ToggleAnimation = ({ refer }) => {
	let tl = useRef();
	const isOpen = useSelector(sidebarState);
	useGSAP(
		() => {
			tl.current = gsap.timeline({ paused: true }).fromTo(
				refer.current,
				{
					clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
				},
				{
					duration: 1.25,
					clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				}
			);
		},

		{ scope: refer }
	);

	useEffect(() => {
		if (isOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}
	}, [isOpen]);

	return <></>;
};
export default ToggleAnimation;
