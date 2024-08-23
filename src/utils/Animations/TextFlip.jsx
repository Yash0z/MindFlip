import gsap from "gsap";
import { useEffect, useRef } from "react";

const TextFlip = ({ text }) => {
	const txtRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			txtRef.current,
			{ rotationX: 0 },
			{
				rotationX: 540,
				duration: 1,
				ease: "power1.inOut",
				repeatDelay: 2,
				repeat: -1,
				yoyo: true,
			}
		);
	}, []);

	return <h1 ref={txtRef}>{text}</h1>;
};

export default TextFlip;
