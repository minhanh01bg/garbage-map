<?php
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"DATA_MAP","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    if($conn){
        $queryLoadData = "SELECT * FROM TRASHBIN";
        $dataAll = sqlsrv_query($conn,$queryLoadData);
        while($rs = sqlsrv_fetch_array($dataAll)){
            echo $rs["TRASHBINID"];
            echo "\t";
            echo $rs["CREATED"];//ngày tạo
            echo "\t";
            echo $rs["TOWNER"]; //T_owner: người sở hữu
            echo "\t";
            echo $rs["TNAME"];
            echo "\t";
            echo $rs["LAT"];
            echo "\t"; 
            echo $rs["LONG"];
            echo "\t";
            echo $rs["STATE"];
            echo "\n";
        }
    }
    else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
    sqlsrv_close( $conn );
?>