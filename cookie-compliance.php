<?php

/**
 *  EU Cookie Compliance for PHP
 **/

class CookieCompliance {
	
	
	
	function init($buffer) {
		
		// @TODO: Remove 1st party cookies
		
		
		
		// @TODO: Remove 3rd party cookies
		
		
		
		
		
		return $buffer;
	}
}


ob_start(array('CookieCompliance', 'init'));