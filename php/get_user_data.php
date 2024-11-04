<?php
	require_once("utility.php");

	RouteSetup();

	$username = GetAllRequestData()["username"] ?? null;
	if($username === null)
		ExitResponse(ResponseType::ClientError, "username not provided");

	if(preg_match("/[!@#$%^&*()_+\=\[\]{};':\"\\|,.<>\/?]+/", $username) === 1)
		ExitResponse(ResponseType::ClientError, "username contains special characters");

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
		ExitResponse(ResponseType::Success, json_decode($responseText, true));
	else
		ExitResponse(ResponseType::ServerError, "internal api call failed");
?>