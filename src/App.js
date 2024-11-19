import { useState } from "react";
import InputForm from "./components/InputForm";
import UserDataOutput from "./components/UserDataOutput";

function App() {
	let [userData, setUserData] = useState({});
	
	function DataReceived(data)
	{
		setUserData(data);
		console.log(data);
	}

	return (
		<div className="min-h-dvh w-full max-w-screen bg-black flex flex-col items-center justify-start box-border py-10">
			<h1 className="
				mb-2
				text-4xl font-semibold
				text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-200
			">
				
			</h1>
			<div className="w-full box-border mt-[7dvh] flex flex-wrap flex-col items-center justify-evenly">				
				<InputForm
					onDataReceived={DataReceived}
				/>
				<div className="h-8"/>
				<UserDataOutput
					data={userData}
				/>
			</div>
		</div>
	);
}

export default App;
