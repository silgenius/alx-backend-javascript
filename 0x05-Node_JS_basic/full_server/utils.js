const fs = require('fs');

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    if (!filepath) {
        reject(new Error('Cannot load the database'));
      }

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            reject(err)
        }

        const students = data.split('\n');
        students.shift();
        let details = {}

        for (let student of students) {
            student = student.split(',').map((s) => s.trim());
            if (student[0]) {
                let field = student[3];
                let firstname = student[0];

                if (!details.hasOwnProperty(field)) {
                    details[field] = []
                }
                details[field].push(firstname);
            }
        }
        resolve(details)
    })
  })
}

module.exports = readDatabase