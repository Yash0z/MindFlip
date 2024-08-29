import gsap from "gsap";
import { useEffect } from "react";
const CardLoad = ({ reference }) => {
	useEffect(() => {
		gsap.fromTo(reference.current, { top: -80 }, { top: 0 });
	}, []);
	return null;
};
export default CardLoad;
