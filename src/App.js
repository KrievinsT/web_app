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
		<div className="h-screen w-screen bg-black flex flex-col items-center justify-start p-4">
			<h1 className="mt-6 text-white text-4xl font-semibold">LinkedIn Data Scrapper</h1>
			<div className="w-full h-3/5 px-6 mt-20 flex flex-row items-center justify-around">				
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
