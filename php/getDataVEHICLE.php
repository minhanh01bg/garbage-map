<?php
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"DATA_MAP","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    if($conn){
        $queryLoadData = "SELECT * FROM Vehicle";
        $dataAll = sqlsrv_query($conn,$queryLoadData);
        while($rs = sqlsrv_fetch_array($dataAll)){
            echo $rs["LICENSEOLATES"];
            echo "\t";
            echo $rs["ENGINEID"];
            echo "\t";
            echo $rs["ENGINETYPE"];
            echo "\t";
            echo $rs["MODEL"];
            echo "\t";
            echo $rs["REGISTRATIONYEAR"];
            echo "\t"; 
            echo $rs["STARTINGDATE"];
            echo "\t";
            echo $rs["VADDRESS"];
            echo "\t";
            echo $rs["VSTATUS"];
            echo "\n";
        }
    }
    else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
    sqlsrv_close( $conn );
?>