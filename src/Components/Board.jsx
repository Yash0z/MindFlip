import "../App.css";
import { useSelector } from "react-redux";
import { selectCards } from "../Store/CardSlice/cardSlice";
import Card from "./Card";

const Board = () => {
	const cards = useSelector(selectCards);
	return (
		<>
			<div className='relative h-[100%] overflow-y-scroll grid grid-cols-1 md:grid-cols-2 x2l:grid-cols-3'>
				{cards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						content={card.content}
						answer={card.answer}
						bookmarked={card.bookmarked}
					/>
				))}
			</div>
		</>
	);
};
export default Board;
