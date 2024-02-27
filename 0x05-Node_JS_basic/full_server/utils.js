#!/usr/bin/node

const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Cannot load the database: ${err.message}`));
      } else {
        const rows = data.split('\n').filter(row => row.trim() !== '');
        const studentsPerField = {};

        for (const row of rows) {
          const [firstName, , field] = row.split(',');
          if (!studentsPerField[field]) {
            studentsPerField[field] = [];
          }
          studentsPerField[field].push(firstName);
        }

        resolve(studentsPerField);
      }
    });
  });
}

module.exports = { readDatabase };
