<?php

  define("N21_APPLICATION","1"); 
	
  session_start();
  
  require_once("properties.php"); 
   
  require_once(PATH_N21LIB."/Http/HttpSession.php");
  require_once(PATH_N21LIB."/Http/HttpRequest.php");
  require_once(PATH_N21LIB."/Http/HttpResponse.php");
  require_once(PATH_N21LIB."/Log/Logger.php");
  require_once("./src/service/SecurityManager.php");  
  
  $session = new HttpSession();
  $request = new HttpRequest();
  $response = new HttpResponse();
    
  
  $logger = Logger::getInstance();
  $logger->setLogLevel(LOG_LEVEL);
  $authAction = false; // request calls for authentication or processing action
    
 
  // If request is neither from an authenticated user nor is an authentication request, no access granted    
  if (!$session->isAuthenticated() ) {  
  	if (!$request->isAuthenticationRequest() ) {
  		HttpResponse::sendStatus(HttpResponse::STATUS_NOT_AUTHORIZED); 
  	} else {
  		// we'll do the authentication a little bit later ...  
  		$authAction = true;		
  	}  	
  } else {
  	 //Double check that current request is coming from session owner according to specific rules.
  	 if (!SecurityManager::confirmAuthenticatedRequest()) {
  	 	HttpResponse::sendStatus(HttpResponse::STATUS_NOT_AUTHORIZED); 
  	 }
  }  

   
  $logger->debug($request->toString());
  
  // Is a valid request ?
  if (!$request->isValid()) {
  	$logger->error($request->getError());  
  	HttpResponse::sendStatus(HttpResponse::STATUS_BAD_REQUEST, true, $request->getError());  	   
  }
    
  //require_once(PATH_N21LIB."/System.php");  
  require_once(PATH_ADODB."/adodb.inc.php");
  require_once(PATH_ADODB."/adodb-exceptions.inc.php");
  require_once(PATH_N21LIB."/Http/MainServlet.php");
  
  try {
    	
  	$ms = new MainServlet($request, $response, $session);  	
	$ms->run();

    if ($logger!=null) {$logger->close();}

  } catch(Exception $e) {
    if ($logger!=null) {$logger->close();}
    HttpResponse::sendStatus(HttpResponse::STATUS_INTERNAL_SERVER_ERROR, true, $e->getMessage());  	   
  }

 
  
  
  
  // some helpers ...
  
	function nvl($v, $d) {
		return (!empty($v))?$v:$d;
	}

?>
