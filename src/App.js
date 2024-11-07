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
		<div className="h-screen w-screen bg-black flex flex-col items-center justify-start py-4">
			<h1 className="mt-6 text-white text-4xl font-semibold">LinkedIn Data Scrapper</h1>
			<div className="w-full h-[33.5rem] px-8 my-auto flex flex-wrap flex-row items-center justify-evenly">				
				<InputForm
					onDataReceived={DataReceived}
				/>
				<UserDataOutput
					data={userData}
				/>
			</div>
		</div>
	);
}

export default App;
