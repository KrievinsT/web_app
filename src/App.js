import InputForm from "./components/InputForm";

function App() {
	function DataReceived(data)
	{
		console.log(data);
		alert("check console for data");
	}

	return (
		<InputForm
			onDataReceived={DataReceived}
		/>
	);
}

export default App;
