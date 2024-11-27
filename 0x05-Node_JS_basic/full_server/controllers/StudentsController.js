import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    let resp;
    resp = 'This is the list of our students';
    readDatabase(process.argv[2])
      .then((result) => {
        for (const field in result) {
          if (Object.prototype.hasOwnProperty.call(result, field)) {
            const FieldResp = `
Number of students in CS: ${result[field].length}. List: ${result[field].join(', ')}`;
            resp += FieldResp;
          }
        }

        res.status(200).send(resp);
      })
      .catch((error) => {
        resp += `\n${error.message}`;
        res.status(500).send(resp);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).end('Major parameter must be CS or SWE');
    } else if (major === 'SWE' || major === 'CS') {
      let resp;
      readDatabase(process.argv[2])
        .then((result) => {
          resp = `List: ${result[major].join(', ')}`;
          res.status(200).end(resp);
        })
        .catch((error) => {
          resp = error.message;
          res.status(500).end(resp);
        });
    }
  }
}

export default StudentsController;
