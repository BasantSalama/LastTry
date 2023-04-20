import express from 'express';

const app = express();

const students = [
    {
        id: 1,
        name: "Fatma",

    },
    {
        id: 2,
        name: "Mariam",


    },
    {
        id: 3,
        name: "Mena",

    },

    {
        id: 4,
        name: "Basant",

    },

]

app.listen(4000);

const studentsFunction = (reques, response) => {

    let output = '<ul>';
    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        output += "<li> " + student.name + "</li >" ;
    }




    output += '</ul'

    response.send(output);
};
app.get('/students', studentsFunction)