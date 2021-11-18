<?php 

function checkConnection() {
        $db = new Database();
        $connection = $db->getConnection();
        if($connection == null) {
            Response::sendResponse(false, "Database connection error.", $connection);
            exit();
        }
        return $connection;
    }

function checkReadAll($object) {
    $result = $object->readAll();
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records.", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total) {
    $result = $object->readLimit($start, $total);
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty records.", []);
        exit();
    }
    return $result;
}

function checkReadById($object) {
    $result = $object->readById();
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records.", []);
        exit();
    }
    return $result;
}


function checkInputData($data) {
    if(empty($data)) {
        Response::sendResponse(false, "404: Data not found.", []);
        exit();
    }
}

function checkCreate($object) {
    $result = $object->create();
    if(!$result) {
        Response::sendResponse(false, "Please check your sql query.", []);
        exit();
    }
    return $result;
}
    
function checkDelete($object) {
    $result = $object->delete();
    if(!$result) {
        Response::sendResponse(false, "Please check your sql query.", []);
        exit();
    }
    return $result;
}

function checkUpdate($object) {
    $result = $object->update();
    if(!$result) {
        Response::sendResponse(false, "There's a problem processing your request.", []);
        exit();
    }
    return $result;
}

function checkReadSearch($object, $search) {
    $result = $object->readAnnouncementsSearch($search);
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty records.", []);
        exit();
    }
    return $result;
}

function getResultData($result) {
    $data = [];
    while($row = $result->fetch_assoc()) {
        extract($row);
        $list = [
            "client_aid " => $client_aid ,
            "client_firstname" => $client_firstname,
            "client_lastname" => $client_lastname,
            "client_mobile" => $client_mobile,
            "client_city" => $client_city,
            "client_address" => $client_address,
            "client_province" => $client_province,
            "client_email" => $client_email,
            "client_zipcode" => $client_zipcode,
            "client_active" => $client_active,
            "client_datetime" => $client_datetime
        ];
        array_push($data, $list);
    }
    return $data;
}

