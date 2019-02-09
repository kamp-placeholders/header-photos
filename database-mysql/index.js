const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllPhotos = function(callback) {
  connection.query('select * from photos', function (error, results, fields) {
    if (error) {
      callback(error);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllPhotos
};
