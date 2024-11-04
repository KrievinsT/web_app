<?php
	$_DEBUG = false;

	$_valid_origins = [
		"http://localhost:3000" => true
	];

	function get_cors_origin()
	{
		global $_valid_origins;

		$origin = $_SERVER["HTTP_ORIGIN"];
		if(isset($_valid_origins[$origin]))
			return $origin;
		
		return false;
	}

	function handle_cors()
	{
		if(GetHeader("Sec-Fetch-Mode") === "cors") // sometimes the full request is given right away
		{
			$origin = get_cors_origin();
			if($origin)
			{
				header("Access-Control-Allow-Origin: " . $origin);
				header("Access-Control-Max-Age: 7200");
				header("Access-Control-Allow-Credentials: true");
				header("Access-Control-Allow-Methods: GET, POST, DELETE");
				header("Access-Control-Allow-Headers: sb-header-size");
			}
		}

		if($_SERVER["REQUEST_METHOD"] === "OPTIONS")
		{
			ob_clean(); // just incase
			exit();
		}
	}

	function handle_errors()
	{
		set_exception_handler(function($throwable){
			ExitResponse(ResponseType::ServerError, sprintf("Uncaught Exception\n%s: %s\n\nStack Trace:\n%s", get_class($throwable), $throwable->getMessage(), $throwable->getTraceAsString()));
		});

		set_error_handler(function(
			$errno,
			$errstr,
			$errfile,
			$errline,
			$errocontext = null
		){
			global $_DEBUG;

			if($_DEBUG === false && $errno === E_WARNING) // this is here because of the file_get_contents call in get_user_data.php, find a better solution if the project grows in scope (curl maybe)
				return;

			ExitResponse(ResponseType::ServerError, sprintf("Uncaught Error (%d) - Line %d of %s\n%s", $errno, $errline, $errfile, $errstr));
		});
	}

	function RouteSetup()
	{
		handle_errors();
		handle_cors();
	}

	enum ResponseType: int
	{
		case Success = 0;
		case ClientError = 1;
		case ServerError = 2;
	}

	function CreateResponse($responseType, $data=null) // data is expected to be a string
	{
		$responseData = ["status"=>$responseType->value];
		if($data !== null)
			$responseData["data"] = $data;

		return json_encode($responseData);
	}

	function ExitResponse($responseType, $data = null)
	{
		ob_clean();
		exit(CreateResponse($responseType, $data));
	}

	function GetHeader($name)
	{
		$headerName = str_replace("-", "_", strtoupper($name));
		if(isset($_SERVER["HTTP_".$headerName]))
		{
			return $_SERVER["HTTP_".$headerName];
		}
		else
		{
			return getallheaders()[implode("-", array_map(function($v)
			{
				$v[0] = strtoupper($v[0]);
				return $v;
			},
			explode("-", strtolower($name))))] ?? null;
		}
	}
	function RemoveCookie($name)
	{
		setcookie($name, "", 0);
	}

	function GetAllRequestData()
	{
		$out = file_get_contents("php://input");

		$decodedJson = json_decode($out, true);
		if($decodedJson === null)
			mb_parse_str($out, $out);
		else
			$out = $decodedJson;

		foreach($_GET as $key => $value)
		{
			$out[$key] = $value;
		}

		return $out;
	}
?>