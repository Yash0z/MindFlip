import Bar from "../utils/Bar";
import Logo from "../utils/Logo";
import "../App.css";

const TopBar = () => {
	return (
		<>
			<div className='topBar flex items-center border relative  z-10  bg-white'>
				<Logo />
				<Bar clr='purple' pos='bottom' axis='y' w='full' h='3' />
			</div>
		</>
	);
};
export default TopBar;
