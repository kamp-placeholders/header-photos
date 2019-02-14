const mysql = require('mysql');
const zeroFill = require('zero-fill');
const faker = require('faker');
const { mysqlHostname, mysqlUsername, mysqlPassword } = require('./database-mysql/config.js');

//config

const connection = mysql.createConnection({
  host: mysqlHostname,
  user: mysqlUsername,
  password: mysqlPassword
});


connection.query(`DROP DATABASE IF EXISTS header_photos`);

connection.query(`CREATE DATABASE header_photos`);

connection.query(`USE header_photos`);

connection.query(`CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  location varchar(50),
  PRIMARY KEY (id)
)`);

connection.query(`CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  url varchar(255),
  restaurant_id int,
  hover_data varchar(255),
  description varchar(255),
  date varchar(255),
  photo_from varchar(255),
  PRIMARY KEY (id)
)`);

const randomNumGenerator = () => {
  let num = Math.floor(Math.random() * 99) + 1;  
  return num;
};
/*
random num greater than 5
Math.floor(Math.random() * 40) + 5
*/
//populate database with photos in random order from S3 bucket
  //AND/OR
//Assign random restaurant_id to each photo
let num = 1;

const photoInsert = () => {
  for (let i = 0; i < 98; i++) {
    let name = zeroFill(3, num);
    let url = `https://s3-us-west-1.amazonaws.com/placeholders-kt/00${name}.jpg`;
    let restaurantId = randomNumGenerator(); 
    let hoverData = faker.random.words();
    let description = faker.lorem.sentence();
    let date = faker.date.past();
    let photoFrom = faker.name.findName();
    connection.query(`INSERT into photos (name, url, restaurant_id, hover_data, description, date, photo_from) VALUES ('${name}', '${url}', '${restaurantId}', '${hoverData}', '${description}', '${date}', '${photoFrom}')`);
    num++;
  }
};

photoInsert();




