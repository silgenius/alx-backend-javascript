const http = require('http');
const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    } else {
      readFile(path, { encoding: 'utf8', flag: 'r' }, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const obj = {};
          let total = 0;
          for (const row of data.trim().split('\n')) {
            const rowData = row.split(',');
            if (rowData[0] !== 'firstname') {
              if (rowData[3] in obj) {
                obj[rowData[3]].push(rowData[0]);
                total += 1;
              } else {
                obj[rowData[3]] = [rowData[0]];
                total += 1;
              }
            }
          }
          let response = `Number of students: ${total}\n`;
          for (const [key, value] of Object.entries(obj)) {
            response += `Number of students in ${key}: ${
              value.length
            }. List: ${value.join(', ')}\n`;
          }
          response = response.slice(0, -1);
          resolve(response);
        }
      });
    }
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    let response = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((resp) => {
        response += resp;
        res.end(response);
      })
      .catch((err) => {
        response += err instanceof Error ? err.message : err.toString();
        res.end(response);
      });
  }
});

app.listen(1245);
module.exports = app;
