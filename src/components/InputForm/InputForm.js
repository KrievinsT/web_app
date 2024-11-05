import axios from "axios";

function ValidUsername(str)
{
	let validExceptions = "_";

	for(let i = 0; i < str.length; ++i)
	{
		if(validExceptions.indexOf(str[i]) !== -1)
			continue;

		let charCode = str.charCodeAt(i);
		if(charCode >= 48 && charCode <= 57) // numbers
			continue;

		if(charCode >= 65 && charCode <= 90) // upper case chars
			continue;

		if(charCode >= 97 && charCode <= 122) // lower case chars
			continue;
			
		return false; // if none of the above was found, the string contains invalid characters
	}

	return true;
}

function InputForm(props)
{
	let _onError = props.onError ? props.onError : function(error_string){
		console.error("Data Scrapper Error: " + error_string);
	};

	function OnSubmit(event)
	{
		let formElem = event.target.parentElement;

		let userInput = formElem.querySelector("#user").value;

		if(userInput === "")
			return _onError("Please fill out the field");

		let urlRegex = /https:\/\/www\.linkedin\.com\/in\/([^\/?]*?)\/*(\?.*)?$/; // check if string starts with https://www.linkedin.com/in/ and captures the next following string, allowing for a trailing slash and/or query string
		let urlMatch = userInput.match(urlRegex);

		let username = urlMatch === null ? userInput : urlMatch[1];

		let specialCharsRegex = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;
		if(specialCharsRegex.test(username))
			return _onError("User input contains invalid characters");			

		
		axios.get("http://127.0.0.1/get_user_data.php", {
			params: {
				username: username
			}
		}).then(function(response){
			let responseData = response.data;
			if(responseData.status === undefined)			
				return _onError("Request failed");

			if(responseData.status !== 0)
				return _onError("Request failed with message - " + responseData.data);
			
			props.onDataReceived(responseData.data);			
		}).catch(function(error){
			return _onError(error.code + " - " + error.message);
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