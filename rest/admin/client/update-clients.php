<?php
    try {
        include_once("../../common/package.php");
        include_once("Clients.php");
        include_once("functions-clients.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);

        checkInputData($data);    

        $connection = checkConnection();
        $clients = new Clients($connection);
        
        $clients->client_aid = filter_var($data["client_aid"], FILTER_SANITIZE_STRING);
        $clients->client_firstname = filter_var($data["client_firstname"], FILTER_SANITIZE_STRING);
        $clients->client_lastname = filter_var($data["client_lastname"], FILTER_SANITIZE_STRING);
        $clients->client_mobile = filter_var($data["client_mobile"], FILTER_SANITIZE_STRING);
        $clients->client_city = filter_var($data["client_city"], FILTER_SANITIZE_STRING);
        $clients->client_address = filter_var($data["client_address"], FILTER_SANITIZE_STRING);
        $clients->client_province = filter_var($data["client_province"], FILTER_SANITIZE_STRING);
        $clients->client_email = filter_var($data["client_email"], FILTER_SANITIZE_STRING);
        $clients->client_zipcode = filter_var($data["client_zipcode"], FILTER_SANITIZE_STRING);
        $clients->client_active = filter_var($data["client_active"], FILTER_SANITIZE_STRING);
        $clients->announcements_datetime = date("Y-m-d H:i:s");  
        $result = checkUpdate($clients);
        Response::sendResponse(true, "Client successfuly updated.", []);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  