import { useRef, useEffect } from "react";
import CardLoad from "../utils/Animations/CardLoad";
const Card = ({ id, content, answer, bookmarked }) => {
	const cardRef = useRef(null);

	return (
		<>
			<div
				ref={cardRef}
				className='relative flex justify-center  items-center font-ClashGrotex text-2xl rounded-lg border-2  border-black bg-blue m-5 x2l:m-10 h-60 p-2'
			>
				<h1>{id}</h1>
				<h1>{content}</h1>
				<h1>{answer}</h1>
				<h1>{bookmarked}</h1>
			</div>
			<CardLoad reference={cardRef} />
		</>
	);
};

export default Card;
