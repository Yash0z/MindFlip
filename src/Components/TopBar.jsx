import Bar from "../utils/Bar";
import Logo from "../utils/Logo";

const TopBar = () => {
	return (
		<>
			<div className='border fixed w-full h-24 z-10  bg-white'>
				<Logo />
				<Bar clr='purple' pos='bottom' axis='y' w='full' h='3' />
			</div>
		</>
	);
};
export default TopBar;
