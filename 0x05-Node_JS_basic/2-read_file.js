const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let NUMBER_OF_STUDENTS = 0;
    let CSCount = 0;
    let SWECount = 0;

    const cs = [];
    const swe = [];

    let students = data.split('\n');
    students.shift(); // Remove header row

    for (let student of students) {
      NUMBER_OF_STUDENTS += 1;
      student = student.split(',').map((s) => s.trim());
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

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${SWECount}. List: ${swe.join(', ')}`);
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the studentbase');
  }
}

module.exports = countStudents;
