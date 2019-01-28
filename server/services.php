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
     $sql = $pdo->prepare("select * from services order by ID desc");
     $sql->execute();
     $services = $sql->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($services);
  break;

  case 'getOne':
     $sql = $pdo->prepare("select * from services where ID = :id");
     $sql->bindParam(':id', $id);
     $sql->execute();
     $service = $sql->fetch();
     echo json_encode($service);

  break;

  case 'create':
    if(!empty($request)) {

       $type    = filter_var($request["TYPE"], FILTER_SANITIZE_STRING);
       $descr   = filter_var($request["DESCRIPTION"],FILTER_SANITIZE_STRING );
       $price   = filter_var($request["PRICE"], FILTER_VALIDATE_FLOAT);
       //Do not use filter_input, doesn't work. use filter_var and research about the
       //difference.

       $sql = "INSERT INTO services(TYPE, DESCRIPTION, PRICE)
                 VALUES (:type, :descr, :price )";

       $dbAction = $pdo->prepare($sql);
       $dbAction->execute(array(
         ':type'  => $type,
         ':descr' => $descr,
         ':price' => $price
       ));
  }
  break;

  case 'edit':
  
    $type    = filter_var($request["TYPE"], FILTER_SANITIZE_STRING);
    $descr   = filter_var($request["DESCRIPTION"],FILTER_SANITIZE_STRING );
    $price   = filter_var($request["PRICE"], FILTER_VALIDATE_FLOAT);

    $sql = $pdo->prepare("update services
                set TYPE = :type, DESCRIPTION = :descr,
                PRICE = :price
                 where ID = :id ");

    $sql->bindParam(':type', $type);
    $sql->bindParam(':descr', $descr);
    $sql->bindParam(':price', $price);
    $sql->bindParam(':id', $id);

    $sql->execute();


  break;

  case 'delete':
    $sql = $pdo->prepare("delete from services where ID = :id");
    $sql->bindParam(':id', $id);
    $sql->execute();
  break;

  default:
}
 ?>
