const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let NUMBER_OF_STUDENTS = 0;
      let CSCount = 0;
      let SWECount = 0;

      const cs = [];
      const swe = [];
      const students = data.split('\n');
      students.shift();

      for (let student of students) {
        student = student.split(',').map((s) => s.trim());
        if (student[0]) { // check if line is not empty or undefined
          NUMBER_OF_STUDENTS += 1;
          const field = student[3];
          const firstname = student[0];

          if (field === 'CS') {
            CSCount += 1;
            cs.push(firstname);
          } else if (field === 'SWE') {
            SWECount += 1;
            swe.push(firstname);
          }
        }
      }
      resolve(`
Number of students: ${NUMBER_OF_STUDENTS}
Number of students in CS: ${CSCount}. List: ${cs.join(', ')}
Number of students in SWE: ${SWECount}. List: ${swe.join(', ')}`);
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let resp = 'This is the list of our students';
  countStudents(process.argv[2])
    .then((result) => {
      resp += result;
      res.send(resp);
    })
    .catch((error) => {
      resp += `\n${error.message}`;
      res.send(resp);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
