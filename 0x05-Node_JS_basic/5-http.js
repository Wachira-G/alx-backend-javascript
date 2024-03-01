#!/usr/bin/node

const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (method === 'GET' && url === '/students') {
    const databaseFilename = process.argv[2];

    const pretext = 'This is the list of our students\n';

    countStudents(databaseFilename)
      .then((responseText) => {
        const formattedText = `${pretext}${responseText}`;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(formattedText);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        if (!databaseFilename) {
          res.end(`${pretext}Cannot load the database`);
        } else {
          res.end(`${pretext}${error.message}`);
        }
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
