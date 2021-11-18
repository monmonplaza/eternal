<?php
    try {
        include_once("../../common/package.php");
        include_once("Clients.php");
        include_once("functions-clients.php"); 
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);
        $connection = checkConnection();
        $clients = new Clients($connection);
        $result = checkReadAll($clients);
        $data = getResultData($result);
        Response::sendResponse(true, "Clients data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  