<?php require_once('cooke.php'); 

// Start a session 

session_start();

$_SESSION['test'] = 'Please forget me unless the user clicks OK';

?><!DOCTYPE html>
<html>
<head>
	
	<title>This is an example</title>
</head>
<body>
	<h1>This is a test</h1>
	<p>This is a a test page. We've set Google Analytics and a PHP cookie</p>
</body>
</html>