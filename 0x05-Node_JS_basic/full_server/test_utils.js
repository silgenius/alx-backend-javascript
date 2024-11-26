const readDatabase = require('./utils')

readDatabase(process.argv[2])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});