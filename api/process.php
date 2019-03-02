<?php
require_once('mysqlCredentials.php');

print("its here");

if(isset($_POST['save'])){
    $task = $_POST['todo-item'];
    $mysqli->query("INSERT INTO list (task) VALUES('$task') ") or die($mysqli->error);

    $_SESSION['message'] = "Address saved";
    header('location: index.php');
}

?>