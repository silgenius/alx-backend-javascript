import app from './server'
import StudentsController from '../controllers/StudentsController'
import AppController from '../controllers/AppController'

app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
})

app.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
})

app.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res)
})