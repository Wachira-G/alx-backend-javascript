#!/usr/bin/node

const fs = require('fs');

function countStudents(filename) {
  try {
    const content = fs.readFileSync(filename, 'utf8');
    const rows = content.split('\n');
    const uniqueValueCounts = {};
    const firstFieldValues = {};
    let rowCount = 0;
    rows.slice(1).forEach((row) => {
      if (row.trim() !== '') {
        rowCount += 1;
        const fields = row.split(',');
        const firstFieldValue = fields[0].trim();
        const lastFieldValue = fields[fields.length - 1].trim();
        if (Object.prototype.hasOwnProperty.call(uniqueValueCounts, lastFieldValue)) {
          uniqueValueCounts[lastFieldValue] += 1;
          firstFieldValues[lastFieldValue].push(firstFieldValue);
        } else {
          uniqueValueCounts[lastFieldValue] = 1;
          firstFieldValues[lastFieldValue] = [firstFieldValue];
        }
      }
    });

    console.log(`Number of students: ${rowCount - 1}`);
    for (const value in uniqueValueCounts) {
      if (Object.prototype.hasOwnProperty.call(uniqueValueCounts, value)) {
        console.log(`Number of students in ${value}: ${uniqueValueCounts[value]}. List: ${firstFieldValues[value].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database', error.message);
  }
}

module.exports = countStudents;
