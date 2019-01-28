create database db_name_here;

  create table services(
    ID INT AUTO_INCREMENT PRIMARY KEY,
      TYPE VARCHAR(255),
      DESCRIPTION TEXT(300),
      PRICE DECIMAL(6,2)
      )ENGINE= InnoDB;

  create table customers(
        ID INT AUTO_INCREMENT PRIMARY KEY,
          NAME VARCHAR(255),
          EMAIL VARCHAR(255),
          ADDRESS VARCHAR(400),
          TELEPHONE VARCHAR (255)
          )ENGINE= InnoDB;

  create table transactions(
            ID INT AUTO_INCREMENT PRIMARY KEY,
              CUSTOMER_ID INT NOT NULL,
              SERVICE_ID INT NOT NULL,
              FOREIGN KEY (CUSTOMER_ID) REFERENCES customers (ID),
              FOREIGN KEY (SERVICE_ID) REFERENCES services (ID)
              )ENGINE= InnoDB;
