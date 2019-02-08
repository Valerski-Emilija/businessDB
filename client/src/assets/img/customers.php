<?php

include_once("header.php");


$action = filter_input(INPUT_GET, 'action');

if($action != 'create' && $action != 'getAll') {
  $id = filter_input(INPUT_GET, 'id');
}
if($action == 'create' || $action == 'edit') {
   $request = json_decode(file_get_contents('php://input'), true);
}
switch($action) {

  case 'getAll':
     $sql = $pdo->prepare("select * from customers order by ID desc");
     $sql->execute();
     $customers = $sql->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($customers);
  break;

  case 'getOne':
     $sql = $pdo->prepare("select * from customers where ID = :id");
     $sql->bindParam(':id', $id);
     $sql->execute();
     $customers = $sql->fetch();
     echo json_encode($customers);

  break;

  case 'create':
    if(!empty($request)) {

        $name    = filter_var($request["NAME"], FILTER_SANITIZE_STRING);
        $email   = filter_var($request["EMAIL"], FILTER_VALIDATE_EMAIL);
        $address = filter_var($request["ADDRESS"], FILTER_SANITIZE_STRING );
        $phone   = filter_var($request["TELEPHONE"],FILTER_SANITIZE_NUMBER_INT );


        $sql = $pdo->prepare("insert into customers(
                        NAME, EMAIL,ADDRESS,TELEPHONE)
                     values(:name, :email, :address, :phone)");

          $sql->bindParam(':name', $name);
          $sql->bindParam(':email', $email);
          $sql->bindParam(':address', $address);
          $sql->bindParam(':phone', $phone);

          $sql->execute();

  }
  break;

  case 'edit':
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

break;

  case 'delete':
    $sql = $pdo->prepare("delete from customers where ID = :id");
    $sql->bindParam(':id', $id);
    $sql->execute();
  break;

  default:
}


?>
