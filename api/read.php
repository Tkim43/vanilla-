<?php
require_once('mysqlCredentials.php');

$result = $mysqli->query("SELECT * FROM list");

// pre_r($result->fetch_assoc());
// pre_r($result->fetch_assoc());

// function pre_r($array){
//     echo '<pre>';
//     print_r($array);
//     echo '</pre>';
// }



$output = [
    'data' => []
];

if(!empty($result)){
    while($row = mysqli_fetch_assoc($result)){
        $output['data'][]= $row;
    }

    // echo $result;
}

$myJSON = json_encode($output);

header('Access-Control-Allow-Origin: *');

echo $myJSON;

// var_dump(json_decode($myJSON));
// var_dump(json_decode($myJSON, true));

// echo $myJSON;
  
?>