#!/usr/bin/node

const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsPerField = await readDatabase('database.csv');

      let responseText = 'This is the list of our students\n';
      Object.keys(studentsPerField)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
        .forEach((field) => {
          responseText += `Number of students in ${field}: ${studentsPerField[field].length}. List: ${studentsPerField[field].join(', ')}\n`;
        });

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsPerField = await readDatabase('database.csv');
      const studentsInMajor = studentsPerField[major] || [];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
