import InputForm from "./components/InputForm/InputForm.js";

function App() {
	function DataReceived(data)
	{
		console.log(data);
		alert("check console for data");
	}

	function OnError(error_string) // optional
	{
		alert(error_string)
	}

	return (
		<InputForm
			onDataReceived={DataReceived}
		/>
	);
}

export default App;
