import InputForm from "./components/InputForm";

function App() {
	function DataReceived(data)
	{
		console.log(data);
		alert("check console for data");
	}

	function OnSubmit(event) // optional
	{
		console.log("form submitted");
	}

	return (
		<InputForm
			onDataReceived={DataReceived}
			onSubmit={OnSubmit}
		/>
	);
}

export default App;
