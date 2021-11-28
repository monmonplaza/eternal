<?php
    try {
        include_once("../../common/package.php");
        include_once("Clients.php");
        include_once("functions-clients.php"); 
        
        
        $body = file_get_contents("php://input");

       
        $data = json_decode($body, true);
               
        $connection = checkConnection();
        checkInputData($data);  


        $clients = new Clients($connection);
        $clients->client_firstname  = filter_var($data["client_firstname"], FILTER_SANITIZE_STRING);
        $clients->client_lastname  = filter_var($data["client_lastname"], FILTER_SANITIZE_STRING);
        $clients->client_mobile  = filter_var($data["client_mobile"], FILTER_SANITIZE_STRING);
        $clients->client_address  = filter_var($data["client_address"], FILTER_SANITIZE_STRING);
        $clients->client_email  = filter_var($data["client_email"], FILTER_SANITIZE_STRING);
        $clients->client_active  = 1;
        $clients->client_datetime = date("Y-m-d H:i:s");  

        $result = checkCreate($clients);
        Response::sendResponse(true, "New client created", $data);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  