CREATE DATABASE chatter;

USE chatter;

CREATE TABLE messages (
  
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  text varchar(255) NOT NULL,
  roomname varchar(255) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)

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

