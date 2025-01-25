const e = require('express')
const readDatabase = require('../utils')

class StudentsController
{
    static getAllStudents(req, res)
    {
        const databaseDir = process.argv[2];
        readDatabase(databaseDir)
        .then((data) =>
        {
            //Format:
            //This is the list of our students
            // Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
            // Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
            let str = 'This is the list of our students'
            for (const field in data)
            {
                str += `Number of Students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
            }
            res.status(200).send(str);

        })
        .catch((error) => 
        {
            console.error(error.message)
            res.status(500).send(error.message)
        })
    }

    static getAllStudentsByMajor(req, res)
    {
        const databaseDir = process.argv[2];
        const major = req.params.major;

        if (major !== 'CS' && major !== 'SWE')
        {
            res.status(500).send('Major parameter must be CS or SWE')
            return
        }

        readDatabase(databaseDir)
        .then((data) =>
        {
            //Format for specific fields (e.g. SWE)
            //List: Guillaume, Joseph, Paul, Tommy
            //Set status 200
            if(data[major])
            {
                const studentList = data[major].join(', ');
                res.status(200).send(`List: ${studentList}`);
            }
            else
            {
                res.status(200).send('List:')
            }
        })
        .catch((error) =>
        {
            console.error(error.message)
            res.status(500).send(error.message)
        })

    }
}

module.exports = StudentsController