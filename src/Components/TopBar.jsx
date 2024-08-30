import Bar from "../utils/Bar";
import Logo from "../utils/Logo";
import "../App.css";
import Sidebar from "../Components/SideBar.jsx";

const TopBar = () => {
	return (
		<>
			<div className='topBar relative flex justify-between items-center  w-full  h-20 z-10  bg-white'>
				<Bar clr='purple' pos='bottom' axis='y' w='full' h='3' />
				<h1>
					<Logo />
				</h1>

				<Sidebar />
			</div>
		</>
	);
};
export default TopBar;
