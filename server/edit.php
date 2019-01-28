<?php

include_once("header.php");


$request = json_decode(file_get_contents("php://input"), true);
$id = filter_input(INPUT_GET, 'id');


if(!empty($request)) {
  $name    = filter_var($request["NAME"], FILTER_SANITIZE_STRING);
  $email   = filter_var($request["EMAIL"], FILTER_VALIDATE_EMAIL);
  $address = filter_var($request["ADDRESS"], FILTER_SANITIZE_STRING );
  $phone   = filter_var($request["TELEPHONE"],FILTER_SANITIZE_NUMBER_INT );


    $sql = $pdo->prepare("update customers
                  set NAME = :name, EMAIL = :email,
                  ADDRESS = :address,TELEPHONE = :phone
                   where ID = :id ");

      $sql->bindParam(':name', $name);
      $sql->bindParam(':email', $email);
      $sql->bindParam(':address', $address);
      $sql->bindParam(':phone', $phone);
      $sql->bindParam(':id', $id);

      $sql->execute();
}



 ?>
