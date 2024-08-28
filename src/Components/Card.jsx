const Card = ({ id, content, answer, bookmarked }) => {
	return (
		<div className='relative flex justify-center  items-center font-ClashGrotex text-2xl rounded-lg border-2  border-black bg-blue m-5 x2l:m-10 min-h-60 max-h-80 p-2'>
			<h1>{id}</h1>
			<h1>{content}</h1>
			<h1>{answer}</h1>
			<h1>{bookmarked}</h1>
		</div>
	);
};

export default Card;
