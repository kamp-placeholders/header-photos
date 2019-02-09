const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'root',
  password: 'password'
};

const connection = mysql.createConnection(config);

connection.query(`DROP DATABASE IF EXISTS placeholder`);

connection.query(`CREATE DATABASE placeholder`);

connection.query(`USE placeholder`);

connection.query(`CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  location varchar(50) NOT NULL,
  PRIMARY KEY (id)
)`);

connection.query(`CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  url varchar(100),
  restaurant_id int,
  hover_data varchar(50),
  description varchar(50),
  date varchar(50),
  photo_from varchar(50),
  PRIMARY KEY (id)
)`);


for (var i = 0; i < 95; i++) {
  let name = 00001;  
  connection.query(`INSERT into photos (name, url) VALUES (${name}, "https://s3-us-west-1.amazonaws.com/placeholders-kt/${name}.jpg")`);
  name++;
}