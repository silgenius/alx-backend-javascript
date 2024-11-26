const { createServer } = require('http');
const { readFile } = require('fs');
const url = require('url');

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

const app = createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.setHeader('Content-Type', 'text/plain');
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((result) => {
        res.end(result);
      })
      .catch((error) => {
        res.end(`\n${error.toString()}`);
      });
  }
});

app.listen(1245);

module.exports = app;
