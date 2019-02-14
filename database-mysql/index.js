const mysql = require('mysql');
const { mysqlHostname, mysqlUsername, mysqlPassword } = require('./config.js');

const connection = mysql.createConnection({
  host: mysqlHostname,
  user: mysqlUsername,
  password: mysqlPassword,
  database: 'header_photos',
});


const getRandomPhotos = (callback) => {
  let photoArr = [];
  for (let i = 1; i < 21; i++) {
    photoArr.push(Math.floor(Math.random() * 98) + 1);
  }
  connection.query(`select * from photos where id in (${photoArr.join(', ')})`, (error, results, fields) => {
    if (error) {
      callback(error);
    }
    callback(null, results);
  });
};

const getAllPhotos = function(callback) {
  connection.query('select * from photos', function (error, results, fields) {
    if (error) {
      callback(error);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllPhotos, getRandomPhotos
};
