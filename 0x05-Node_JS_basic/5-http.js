const { createServer } = require('http');
const { PassThrough } = require('stream');
const url  = require('url')
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = '1245';

const app = createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

//   res.setHeader('Content-Type', 'text/plain');
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.write('This is the list of our students')
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {
      const data = process.stdin.read();
      if (data !== null) {
        res.write(data)
      }
    });
    countStudents(process.argv[2]).then(() => {
    res.end();
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})