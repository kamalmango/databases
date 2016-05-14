CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  text varchar(255) NOT NULL,
  roomname varchar(255) NOT NULL,
  PRIMARY KEY (ID)

);


CREATE TABLE users (
  
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  PRIMARY KEY (ID)

);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

