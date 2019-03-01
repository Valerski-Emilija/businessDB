<?php

  $pdo = new PDO('mysql:host=localhost;dbname=your_db', 'your_user', 'your_password');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 ?>
