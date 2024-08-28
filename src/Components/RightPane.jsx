import Bar from "../utils/Bar";
import "../App.css";

const RightPane = () => {
	return (
		<>
			<div className='rightPane hidden relative border xl:block'>
				<Bar clr='yellow' pos='left' axis='x' w='3' h='full' />
				
			</div>
		</>
	);
};
export default RightPane;
