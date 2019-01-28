<?php

  $pdo = new PDO('mysql:host=localhost;dbname=your_database_name', 'your_username', 'your_password');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 ?>
