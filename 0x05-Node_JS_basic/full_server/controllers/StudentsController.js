const readDatabase = require('../utils')

class StudentsController {
    static getAllStudents(req, res) {
        resp = 'This is the list of our students'
        readDatabase(process.argv[4])
        .then((result) => {
            for (let field in result) {
                field_resp = `
Number of students in CS: ${result[field].length}. List: ${result[field].join(', ')}`
                resp += field_resp

            }

            res.status(200).send(resp);
        })
        .catch((error) => {
            resp += '\n' + error.message;
            res.status(500).send(resp)
        });
    };

    static getAllStudentsByMajor(req, res) {
        let major = req.params.major;
        if (major === 'SWE' || major === 'CS') {
            let resp;
            readDatabase('../../database.csv')
            .then((result) => {
                resp = `List: ${result[major].join(', ')}`
                res.status(200).send(resp)
            })
            .catch((error) => {
                resp = error.message
                res.status(500).send(resp)
            })
        }
        res.status(500).send('Major parameter must be CS or SWE')
    }
}

export default StudentsController;