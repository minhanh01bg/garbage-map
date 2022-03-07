<?php
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"data-garbage","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    if($conn){
        // echo "Connection true";
        $queryLoadData = "SELECT * FROM admin";
        $dataAll = sqlsrv_query($conn,$queryLoadData);
        while($rs = sqlsrv_fetch_array($dataAll)){
            echo $rs["A_Username"];
            echo " ";
            echo $rs["A_Password"];
            echo "\n";
        }
    }
    else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
?>