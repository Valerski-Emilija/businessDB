<?php

include_once("functions.php");
// include_once('header.php');

$action = filter_input(INPUT_GET, 'action');

if($action != 'create' && $action != 'getAll') {
  $id = filter_input(INPUT_GET, 'id');
}
if($action == 'create' || $action == 'edit') {
   $request = json_decode(file_get_contents('php://input'), true);
}
switch($action) {

  case 'getAll':
    selectTransactions();
  break;

  case 'getOne':
     getOne('transactions', $id);

  break;

  case 'create':
    if(!empty($request)) {

        $customerID    = filter_var($request["customerID"], FILTER_VALIDATE_INT);
        $serviceID     = filter_var($request["serviceID"], FILTER_VALIDATE_INT);
        $amount        = filter_var($request["amount"], FILTER_VALIDATE_INT);
        $price_total   = filter_var($request["price_total"], FILTER_VALIDATE_FLOAT);
        $paid          = filter_var($request["paid"], FILTER_VALIDATE_INT);


        $sql = $pdo->prepare("insert into transactions(
                      CUSTOMER_ID, SERVICE_ID, amount, price_total, paid)
                     values(:customerID, :serviceID, :amount, :price, :paid)");

          $sql->bindParam(':customerID', $customerID);
          $sql->bindParam(':serviceID', $serviceID);
          $sql->bindParam(':amount', $amount);
          $sql->bindParam(':price_total', $price_total);
          $sql->bindParam(':paid', $paid);

          $sql->execute();

  }
  break;

  case 'edit':
  if(!empty($request)) {

    //to do
  }

break;

  case 'delete':
    $sql = $pdo->prepare("delete from transactions where ID = :id");
    $sql->bindParam(':id', $id);
    $sql->execute();
  break;

  default:
}


?>
