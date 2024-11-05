import { useRef } from "react";

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
	let _onSubmit = props.onSubmit ? props.onSubmit : function(event){
		console.log("clicked")
	}

	let formElem = useRef(null);
	
	function OnError(error_string)
	{
		formElem.current.querySelector("p").innerText = error_string;
	}

	function OnSubmit(event)
	{
		_onSubmit(event);

		let userInput = formElem.current.querySelector("#user").value;

		if(userInput === "")
			return OnError("Please enter the target user");

		let urlRegex = /https:\/\/www\.linkedin\.com\/in\/([^\/?]*?)\/*(\?.*)?$/; // check if string starts with https://www.linkedin.com/in/ and captures the following text, allowing for a trailing slash and/or query string
		let urlMatch = userInput.match(urlRegex);

		let username = urlMatch === null ? userInput : urlMatch[1];

		if(!ValidUsername(username))
			return OnError("Input contains invalid characters");
		
		axios.get("http://127.0.0.1/get_user_data.php", {
			params: {
				username: username
			}
		}).then(function(response){
			let responseData = response.data;
			if(responseData.status === undefined)			
				return OnError("Request failed");

			if(responseData.status !== 0)
				return OnError("Request failed with message - " + responseData.data);
			
			formElem.current.querySelector("p").innerText = "";
			props.onDataReceived(responseData.data);
		}).catch(function(error){
			return OnError(error.code + " - " + error.message);
		});
	}

	return (
		<div ref={formElem}>
			<label>User Input (Name or URL): </label><br/>
			<input type="text" id="user"/><br/>
			<button onClick={OnSubmit}>Submit</button><br/>
			<p style={{color: "red"}}></p>
		</div>
	);
}

export default InputForm;