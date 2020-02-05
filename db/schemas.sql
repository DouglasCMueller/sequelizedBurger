### Schema

CREATE DATABASE burgersSequelized_db;
USE burgersSequelized_db;

CREATE TABLE sequelizedBurgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);