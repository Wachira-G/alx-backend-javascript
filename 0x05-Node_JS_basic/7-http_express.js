#!/usr/bin/node

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFilename = process.argv[2];

  countStudents(databaseFilename)
    .then((responseText) => {
      const formattedText = `This is the list of our students\n${responseText}`;
      res.send(formattedText);
    })
    .catch((error) => {
      res.status(500).send(`Internal Server Error: ${error.message}`);
    });
});

app.listen(1245, () => {});

module.exports = app;
