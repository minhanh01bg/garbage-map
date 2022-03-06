<?php
    // $nameFile = "test";
    // $filePath = "temp/".$nameFile.".txt";
    // if(file_exists($filePath) == false){
    //     $output="false";
    //     echo $output;
    // }
    // else{
    //     $read = file($filePath);
    //     foreach ($read as $line) {
    //         echo $line;
    //     }
    // }

    $severName = "DESKTOP-LH0LVCT\ZEROTWO";
    $connectionInfo = array("Database"=>"TEST","UID"=>"sa","PWD"=>"zerotwo002");
    $conn = sqlsrv_connect($severName,$connectionInfo);
    if($conn){
        echo "Connection false";
    }
    else{
        $sql = "SELECT latitude FROM latlng";
        $rs = sqlsrv_query($conn,$sql);
        while($column = sqlsr_fetch_array(rs)){
            echo $r['latitude'];
        }
    }
?>