<?php
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"data-garbage","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    $user = $_POST["username"];
    $password = $_POST["password"];
    
    if($conn){
        // echo "Connection true";
        $queryLoadData = "SELECT * FROM admin";
        $dataAll = sqlsrv_query($conn,$queryLoadData);
        while($rs = sqlsrv_fetch_array($dataAll)){
            if($rs["A_Username"] === $user && $rs["A_Password"] === $password){
                echo "true"; break;  
            }
        }
        // echo "false";
    }
    else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
?>