const express = require('express');
const path = require('path');

const app = express();
const { getAllPhotos, getRandomPhotos } = require('../database-mysql/index.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/photos', (req, res) => {
  getRandomPhotos((err, data) => {
    if (err) {
      console.log('ERRROR from Server!!');
      res.status(400).send(err);
    } else {
      console.log('Got Data from Server!');
      res.status(200).send(data);
    }
  });
});
app.listen(3333, () => { console.log('Server listening on Port 3333'); });