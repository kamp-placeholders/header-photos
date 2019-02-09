const express = require('express');
const path = require('path');

const app = express();
const { getAllPhotos } = require('../database-mysql/index.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/photos', (req, res) => {
  console.log('data???');
  getAllPhotos((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.listen(3333, () => { console.log('Server listening on Port 3333'); });