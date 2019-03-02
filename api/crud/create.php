<?php

$task = $_POST['todo-item'];

$sql = "INSERT INTO `list` SET `task` = '$task'";

$result = mysqli_query($con, $sql);

if(!empty($result)){
    if(mysqli_affected_rows($con)){
        $output['success']=true;
        $output['id'] = mysqli_insert_id($con);
    } else {
        $output['errors'][] = 'Unable to add data';
    }
} else {
    $output['errors'][]='Invalid SQL query';
}

?>