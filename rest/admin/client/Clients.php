<?php
class Clients {
    public $client_aid ;
    public $client_firstname ;
    public $client_lastname ;
    public $client_mobile ;
    public $client_city ;
    public $client_address ;
    public $client_province ;
    public $client_email ;
    public $client_zipcode ;
    public $client_active ;
    public $client_datetime ;

    public $connection ;
    public $tblClients ;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblClients = "ecs_client";
    }


    public function readAll() {
        $sql = "select * from {$this->tblClients} ";
        $sql .= "order by client_aid  desc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function delete() {
        $sql = "delete from {$this->tblClients} "; 
        $sql .= "where client_aid  = '{$this->client_aid }' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    
    public function update() {
        $sql = "update {$this->tblClients} set ";
        $sql .= "client_firstname = '{$this->client_firstname}', ";
        $sql .= "client_lastname = '{$this->client_lastname}', ";
        $sql .= "client_mobile = '{$this->client_mobile}', ";
        $sql .= "client_city = '{$this->client_city}', ";
        $sql .= "client_address = '{$this->client_address}', ";
        $sql .= "client_province = '{$this->client_province}', ";
        $sql .= "client_email = '{$this->client_email}', ";
        $sql .= "client_zipcode = '{$this->client_zipcode}', ";
        $sql .= "client_province = '{$this->client_province}' ";
        $sql .= "where client_aid  = '{$this->client_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }


    public function create() {
        $sql = "insert into {$this->tblClients} ";
        $sql .= "( client_firstname, ";        
        $sql .= "client_lastname, "; 
        $sql .= "client_mobile, "; 
        $sql .= "client_city, "; 
        $sql .= "client_address, "; 
        $sql .= "client_province, "; 
        $sql .= "client_email, "; 
        $sql .= "client_zipcode, "; 
        $sql .= "client_datetime ) values ( ";
        $sql .= "'{$this->client_firstname}', ";
        $sql .= "'{$this->client_lastname}', ";
        $sql .= "'{$this->client_mobile}', ";
        $sql .= "'{$this->client_city}', ";
        $sql .= "'{$this->client_address}', ";
        $sql .= "'{$this->client_province}', ";
        $sql .= "'{$this->client_email}', ";
        $sql .= "'{$this->client_zipcode}', ";
        $sql .= "'{$this->client_datetime}' ) ";
     
        
        $result = $this->connection->query($sql);
        return $result;
    }



}