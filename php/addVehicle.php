<?php
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"DATA_MAP","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    
    // data send by post
    $licensePlate = $_POST["licensePlate"];
    $engineIdInput = $_POST["engineIdInput"];
    $engineTypeInput=$_POST["engineTypeInput"];
    $modelInput = $_POST["modelInput"];
    $registrationYearInput= $_POST["registrationYearInput"];
    $startingDateInput= $_POST["startingDateInput"];
    $addressInput= $_POST["addressInput"];
    $statusInput= $_POST["statusInput"];
 
    if($conn){
        // echo "connect true";
        //    query 
        $queryLoadData = "INSERT INTO VEHICLE (LICENSEOLATES, ENGINEID, ENGINETYPE, MODEL,REGISTRATIONYEAR,STARTINGDATE,VIMAGE,VADDRESS,VSTATUS)
        VALUES ('$licensePlate', '$engineIdInput', '$engineTypeInput', '$modelInput','$registrationYearInput',
        '$startingDateInput',NULL,'$addressInput','$statusInput')
        ";
        // conduct delete
        $dataAll = sqlsrv_query($conn,$queryLoadData);
        if($dataAll === false){
            die( print_r( sqlsrv_errors(), true));
        }
        echo "add true";
    }
    else if($conn === false) {
        die( print_r( sqlsrv_errors(), true));
    }
    sqlsrv_close( $conn );
?>