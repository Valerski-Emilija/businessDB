<?php

// function selectTrans($table) {
//   include_once('header.php');
//   $sql = $pdo->prepare("select * from $table order by ID desc");
//
//
//
//   $sql->execute();
//   $transactions = $sql->fetchAll(PDO::FETCH_ASSOC);
//   echo json_encode($transactions);
// }

function selectTransactions() {
  include_once('header.php');
  $sql = $pdo->prepare("select T.amount, T.price_total, case when T.paid  = 0 then 'no' else 'yes' end as paid, 
                         C.NAME, S.TYPE
                         from transactions T join customers C on T.CUSTOMER_ID = C.ID
                         join services S on T.SERVICE_ID = S.ID;");
  $sql->execute();
  $transactions = $sql->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($transactions);
}

function getOne($table, $id) {
  include_once('header.php');
  $sql = $pdo->prepare("select * from $table where ID = :id");
  $sql->bindParam(':id', $id);
  $sql->execute();
  $transaction = $sql->fetch();
  echo json_encode($transaction);
}








?>
