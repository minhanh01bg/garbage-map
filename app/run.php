<?php
    $valLL = $_POST['LatLong'];
    $name = "test";
    $filePath="temp/".$name.".txt";
    $File = fopen($filePath,'a+');
    fwrite($File,$valLL);
    fwrite($File,"\n");
    echo $valLL;
    fclose($File);