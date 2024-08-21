import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='text-black items-center text-7xl border-black border h font-Helvetica_re w-full h-screen  flex justify-center'>
				<h1>MINDFLIP</h1>
			</div>
		</>
	);
}

export default App;
