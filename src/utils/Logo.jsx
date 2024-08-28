import TextFlip from "./Animations/TextFlip";
const Logo = () => {
	return (
		<div className='absolute  cursor-pointer left-4 top-4 flex  gap-3 text-4xl font-Satoshi_bk'>
			<img className='size-10' src='/assets/logo.webp' alt='Logo' />
			<span className='flex gap-1'>
				<span>Mind</span>

				<TextFlip text='FLIP' />
			</span>
		</div>
	);
};

export default Logo;
