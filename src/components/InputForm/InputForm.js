import axios from "axios";

function InputForm(props)
{	
	function OnSubmit(event)
	{
		let formElem = event.target.parentElement;

		let userInput = formElem.querySelector("#user").value;

		if(userInput === "")
			return alert("user not provided");

		let urlRegex = /https:\/\/www\.linkedin\.com\/in\/([^\/?]*?)\/*(\?.*)?$/; // check if string starts with https://www.linkedin.com/in/ and captures the next following string, allowing for a trailing slash and/or query string
		let urlMatch = userInput.match(urlRegex);

		let username = urlMatch === null ? userInput : urlMatch[1];

		let specialCharsRegex = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;
		if(specialCharsRegex.test(username))
			return alert("bad user input");			

		axios.get("http://127.0.0.1/get_user_data.php", {
			params: {
				username: username
			}
		}).then(function(response){
			let responseData = response.data;
			if(responseData.status === undefined)			
				return alert("request failed");

			if(responseData.status !== 0)
				return alert("request failed with error - " + responseData.data);
			
			props.onDataReceived(responseData.data);			
		}).catch(function(error){
			return alert(error.code + " - " + error.message);
		});
	}

	return (
		<div>
			<label>User Input (Name or URL): </label><br/>
			<input type="text" id="user"/><br/>
			<button onClick={OnSubmit}>Submit</button>
		</div>
	);
}

export default InputForm;