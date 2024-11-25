const fs = require('fs');

function countStudents(path) {
  return new Promise(() => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      let NUMBER_OF_STUDENTS = 0;
      let CSCount = 0;
      let SWECount = 0;

      const cs = [];
      const swe = [];
      const students = data.split('\n');
      students.shift();

      for (let student of students) {
        NUMBER_OF_STUDENTS += 1;
        student = student.split(',').map((s) => s.trim());
        const field = student[3];
        const firstname = student[0];

        if (field === 'CS') {
          CSCount += 1;
          cs.push(firstname);
        } else if (field === 'CS') {
          SWECount += 1;
          swe.push(firstname);
        }
      }
      console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
      console.log(`Number of students in CS: ${CSCount}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${SWECount}. List: ${swe.join(', ')}`);
    });
  });
}

module.exports = countStudents;
