<?php
    // connect
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"DATA_MAP","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    
    if($conn){
        // echo "Connection true";
        $query ="SELECT LAT,LONG from trashbin";
        $dataLoad = sqlsrv_query($conn,$query);
        while($rs = sqlsrv_fetch_array($dataLoad)){
            echo $rs["LAT"];
            echo "\t";
            echo $rs["LONG"];
            echo "\n";
        }
    }else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
    sqlsrv_close( $conn );
?>