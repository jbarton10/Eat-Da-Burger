### Schema
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
	
);
