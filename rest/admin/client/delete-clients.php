<?php
try{
      include_once("../../common/package.php");
      include_once("Clients.php");
      include_once("functions-clients.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        $connection = checkConnection();
        checkInputData($data);  
        $clients = new Clients ($connection);
        $clients->client_aid = filter_var($data["client_aid"], FILTER_SANITIZE_STRING);  
        $result = checkDelete($clients);
        Response::sendResponse(true, "Client successfuly deleted.",[]);      
    } catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  