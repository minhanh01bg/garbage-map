<?php
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"DATA_MAP","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    $id = $_POST["id"];
    if($conn){
        echo "connect true";
        //    query 
        $queryLoadData = "DELETE FROM vehicle
        WHERE LICENSEOLATES = '$id'";
        // conduct delete
        $dataAll = sqlsrv_query($conn,$queryLoadData);
        echo "delete true";
    }
    else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
    sqlsrv_close( $conn );
?>