<?php
    // database connection
    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"DATA_MAP","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    if( $conn === false ) {
        die( print_r( sqlsrv_errors(), true));
    }
    echo "SUCCESSION connect Database\n";
    // data input
    $engineId = $_POST['engineId'];
    $engineType = $_POST['engineType'];
    $registrationYear = $_POST['registrationYear'];
    $startingDate = $_POST['startingDate'];
    $address = $_POST['address'];
    $id = $_POST['id'];
    $status = $_POST['status'];
    $model=$_POST['model'];
    // query update
    $query="UPDATE vehicle
        SET ENGINEID='$engineId',ENGINETYPE='$engineType',MODEL = '$model',
        REGISTRATIONYEAR='$registrationYear',STARTINGDATE='$startingDate',VADDRESS='$address',VSTATUS = '$status'
        WHERE LICENSEOLATES ='$id'";

    // conduct update
    $stmt = sqlsrv_query($conn,$query);
    if( $stmt === false ) {
        die( print_r( sqlsrv_errors(), true));
    }
    echo "update true";
    // close database connection
    sqlsrv_close( $conn );    
?>