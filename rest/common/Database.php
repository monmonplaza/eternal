<?php
class Database {
    private $host;
    private $databaseName;
    private $username;
    private $password;
    public function getConnection() {
        $host = "localhost";
        //$databaseName = "dbvgfndluxiatg"; 
        $databaseName = "db_eternal"; 
       // $username = "ugxv5milyju80"; 
        $username = "root"; 
       // $password = "Tr2Na,+kI9c$"; 
        $password = ""; 
        $mysqli = new mysqli($host, $username, $password, $databaseName);
        if($mysqli->connect_error) {
            $mysqli = null;
        }
        return $mysqli;
    }
}