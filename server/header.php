<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Request-Headers", "*");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS ");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
// header("Access-Control-Allow-Credentials", "true");

require_once "db.php";

 ?>
