DROP DATABASE IF EXISTS savings;

CREATE DATABASE savings;

USE savings;

CREATE TABLE savingsInput(
	id INT (10) AUTO_INCREMENT NOT NULL,
    balance FLOAT(10,2),
    googleId VARCHAR (50) NOT NULL,
    userName VARCHAR (35) NOT NULL,
    password VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);
SELECT* FROM savings;