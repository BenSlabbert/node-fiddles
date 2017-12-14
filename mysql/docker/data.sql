CREATE SCHEMA addressbook;
USE addressbook;

CREATE TABLE People
(
  ID        BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Firstname VARCHAR(20),
  Lastname  VARCHAR(20)
);

CREATE UNIQUE INDEX People_ID_uindex
  ON People (ID);

CREATE TABLE PersonAddress
(
  PersonID BIGINT NULL,
  AddressID BIGINT NULL
) ENGINE = InnoDB;

CREATE TABLE Addresses
(
  ID      BIGINT AUTO_INCREMENT
    PRIMARY KEY,
  Address VARCHAR(50) NULL,
  CONSTRAINT Addresses_ID_uindex
  UNIQUE (ID)
) ENGINE = InnoDB;

INSERT INTO People (Firstname, Lastname) VALUES ('John', 'Doe');
INSERT INTO People (Firstname, Lastname) VALUES ('Jane', 'Doe');

INSERT INTO PersonAddress (PersonID, AddressID) VALUES (1, 100);
INSERT INTO PersonAddress (PersonID, AddressID) VALUES (2, 100);

INSERT INTO Addresses (ID, Address) VALUES (100, '101 1st Street');
