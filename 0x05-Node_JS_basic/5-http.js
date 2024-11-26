const { createServer } = require('http');
const url = require('url');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
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
const port = '1245';

const app = createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.setHeader('Content-Type', 'text/plain');
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.write('This is the list of our students');
    countStudents(process.argv[2])
      .then((result) => {
        res.write(result);
        res.end();
      })
      .catch(() => {
        res.end();
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app