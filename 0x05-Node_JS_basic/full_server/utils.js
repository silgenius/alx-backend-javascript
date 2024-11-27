const fs = require('fs');

export default function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    if (!filepath) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n');
      students.shift();
      const details = {};

      for (let student of students) {
        student = student.split(',').map((s) => s.trim());
        if (student[0]) {
          const field = student[3];
          const firstname = student[0];

          if (!Object.prototype.hasOwnProperty.call(details, field)) {
            details[field] = [];
          }
          details[field].push(firstname);
        }
      }
      resolve(details);
    });
  });
}
