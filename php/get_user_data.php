<?php
	require_once("utility.php");

	RouteSetup();

	function ValidUsername($str)
	{
		$validExceptions = "_";

		$strLen = strlen($str);
		for($i = 0; $i < $strLen; ++$i)
		{
			$char = $str[$i];
			if(str_contains($validExceptions, $char))
				continue;

			$charCode = ord($char);
			if($charCode >= 48 && $charCode <= 57) // numbers
				continue;

			if($charCode >= 65 && $charCode <= 90) // upper case chars
				continue;

			if($charCode >= 97 && $charCode <= 122) // lower case chars
				continue;
			
			return false; // if none of the above was found, the string contains invalid characters
		}

		return true;
	}
	
	$username = GetAllRequestData()["username"] ?? null;
	if($username === null)
		ExitResponse(ResponseType::ClientError, "Username not provided");

	if(strlen($username) === 0)
		ExitResponse(ResponseType::ClientError, "Username is invalid length");
	
	if(!ValidUsername($username))
		ExitResponse(ResponseType::ClientError, "Username contains invalid characters");

	$http_context = stream_context_create([
		"http" => [
			"method" => "GET",
			"header" =>
				"x-rapidapi-key: 863f996b17msh702f87465d3cdfap1e3ad1jsn444217e2a189\n" .
				"x-rapidapi-host: linkedin-data-api.p.rapidapi.com"
		]
	]);

	// generally if this fails, RapidAPI will set the appropriate http error response code and file_get_contents will throw a warning, in which case it returns false
	$responseText = file_get_contents("https://linkedin-data-api.p.rapidapi.com/?username=" . urlencode($username), false, $http_context);
	if($responseText)
	{
		$responseData = json_decode($responseText, true);
		$success = $responseData["success"] ?? true; // the success field is not provided when the request succeeds
		if($success)
			ExitResponse(ResponseType::Success, $responseData);
		else
			ExitResponse(ResponseType::ClientError, $responseData["message"]);
	}
	else
		ExitResponse(ResponseType::ServerError, "Internal api call failed");
?>