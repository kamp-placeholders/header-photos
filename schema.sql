-- instructions found in database-mysql/config.example.js

DROP DATABASE IF EXISTS header_photos;

CREATE DATABASE header_photos;

USE header_photos;

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  url varchar(100),
  restaurant_id int,
  hover_data varchar(50),
  description varchar(50),
  date varchar(50),
  photo_from varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  location varchar(50),
  PRIMARY KEY (id)
);
