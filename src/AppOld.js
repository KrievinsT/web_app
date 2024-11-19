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
			<h1 className="mb-16 text-white text-4xl font-semibold">LinkedIn Data Scrapper</h1>
			<div className="w-full box-border px-0 xl:px-8 mt-[7dvh] flex flex-wrap flex-row items-center justify-evenly">				
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
