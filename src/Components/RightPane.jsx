import Bar from "../utils/Bar";

const RightPane = () => {
	return (
		<>
			<div className='hidden absolute h-screen w-80  right-0 border lg:block'>
				<Bar clr='yellow' pos='left' axis='x' w='3' h='full' />
			</div>
		</>
	);
};
export default RightPane;
