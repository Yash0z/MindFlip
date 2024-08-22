import Board from "./Components/Board";
import RightPane from "./Components/RightPane";
import TopBar from "./Components/TopBar";
import "./App.css";

function App() {
	return (
		<>
			<div className='h-screen homePage'>
				<TopBar />
				<Board />
				<RightPane />
			</div>
		</>
	);
}

export default App;
