#!/usr/bin/node

const fs = require('fs');

function countStudents(filename) {
  return new Promise((resolve, reject) => {
    const uniqueValueCounts = {};
    const firstFieldValues = {};
    let rowCount = 0;

    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Cannot load the database: ${err.message}`));
        return;
      }

      const rows = data.split('\n');
      rows.forEach((row, index) => {
        if (index > 0 && row.trim() !== '') {
          rowCount += 1;
          const fields = row.split(',');
          const firstFieldValue = fields[0].trim();
          const lastFieldValue = fields[fields.length - 1].trim();

          if (uniqueValueCounts[lastFieldValue]) {
            uniqueValueCounts[lastFieldValue] += 1;
            firstFieldValues[lastFieldValue].push(firstFieldValue);
          } else {
            uniqueValueCounts[lastFieldValue] = 1;
            firstFieldValues[lastFieldValue] = [firstFieldValue];
          }
        }
      });

      let output = `Number of students: ${rowCount}`;
      console.log(`Number of students: ${rowCount}`);
      for (const value in uniqueValueCounts) {
        if (Object.prototype.hasOwnProperty.call(uniqueValueCounts, value)) {
          console.log(`Number of students in ${value}: ${uniqueValueCounts[value]}. List: ${firstFieldValues[value].join(', ')}`);
          output += (`\nNumber of students in ${value}: ${uniqueValueCounts[value]}. List: ${firstFieldValues[value].join(', ')}`);
        }
      }

      resolve(output); // Resolve the promise once processing is complete
    });
  });
}

module.exports = countStudents;
